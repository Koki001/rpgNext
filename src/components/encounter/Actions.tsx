import styles from "./Encounter.module.scss";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { completeTurn, endEncounter } from "@/src/store/slices/progressSlice";
import { hitEnemy } from "@/src/store/slices/enemySlice";

const Actions = () => {
  const player = useAppSelector((getPlayer) => getPlayer.player);
  const enemy = useAppSelector((getEnemy) => getEnemy.enemy);
  const progress = useAppSelector((getProgress) => getProgress.progress);
  const dispatch = useAppDispatch();
  // console.log(enemy)
  return (
    <div className={styles.actions}>
      <h1>ACTIONS GO HERE</h1>
      <div className={styles.actionButtons}>
        <button onClick={() => dispatch(hitEnemy(20))} disabled={!progress.playerTurn}>attack</button>
        <button disabled={!progress.playerTurn}>special</button>
        <button onClick={() => dispatch(completeTurn())}>dev turn</button>
        <button onClick={() => dispatch(endEncounter())}>dev end</button>
      </div>
    </div>
  );
};

export default Actions;
