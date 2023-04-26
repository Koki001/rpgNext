import { useAppSelector } from "@/src/store/hooks";
import styles from "./Bars.module.scss"

const PlayerHealth = () => {
  const player = useAppSelector((getPlayer) => getPlayer.player);
  return (
    <div className={`${styles.playerHealth} ${styles.bar}`}>
      <p>Health: {player.health}</p>
      <div className={styles.healthBar}></div>
    </div>
  );
};

export default PlayerHealth;
