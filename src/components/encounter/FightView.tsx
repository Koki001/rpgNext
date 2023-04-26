import { useState } from "react";
import styles from "./Encounter.module.scss";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";

const FightView = () => {
  const player = useAppSelector((getPlayer) => getPlayer.player);
  const enemy = useAppSelector((getEnemy) => getEnemy.enemy);
  const progress = useAppSelector((getProgress) => getProgress.progress);
  const dispatch = useAppDispatch();
  const [enemyCurrentHP, setEnemyCurrentHP] = useState(enemy.health);
  const enemyHealth = (enemy.health / enemyCurrentHP) * 100;
  return (
    <div className={styles.encounterTop}>
      {progress.playerTurn ? (
        <h2 className={styles.yourTurn}>YOUR TURN</h2>
      ) : (
        <h2 className={styles.enemyTurn}>ENEMY TURN</h2>
      )}
      <div className={`${styles.player} ${styles[player.type]}`}></div>
      <div className={`${styles.enemy}`}>
        <div className={styles.orcHp}>
          <p>HP: {enemy.health}</p>
          <span style={{ width: `${enemyHealth}%` }}></span>
        </div>
        <div className={`${styles.orc}`}></div>
      </div>
    </div>
  );
};

export default FightView;
