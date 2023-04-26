import styles from "../game/Game.module.scss";
import PlayerHealth from "../bars/PlayerHealth";
import PlayerExp from "../bars/PlayerExp";
import PlayerMana from "../bars/PlayerMana";
import PlayerPower from "../bars/PlayerPower";
import Actions from "../encounter/Actions";
import { useAppSelector } from "@/src/store/hooks";

const ScreenControls = (props: any) => {
  const progress = useAppSelector((getProgress) => getProgress.progress);
  return (
    <>
      <div className={styles.bottomLeft}>
        <h2>
          {props.player.name} - Level {props.player.level} {props.player.type}
        </h2>
        <div className={styles.playerInfo}>
          <button>menu (exit)</button>
          <button>stats</button>
          <button>inventory</button>
        </div>
        <div>
          <PlayerHealth />
          {props.player.magic ? <PlayerMana /> : <PlayerPower />}
          <PlayerExp />
        </div>
      </div>
      <div className={styles.bottomRight}>
        {!progress.encounter ? (
          <p>
            Left click to move around. Moving too close to enemy will start
            encounter.
          </p>
        ) : (
          <Actions />
        )}
      </div>
    </>
  );
};

export default ScreenControls;
