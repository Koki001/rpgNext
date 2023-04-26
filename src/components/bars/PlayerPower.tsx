import { useAppSelector } from "@/src/store/hooks";
import styles from "./Bars.module.scss";

const PlayerPower = () => {
  const player = useAppSelector((getPlayer) => getPlayer.player);
  return (
    <div className={`${styles.playerPower} ${styles.bar}`}>
      <p>Power: {player.power}</p>
      <div className={styles.powerBar}></div>
    </div>
  );
};

export default PlayerPower;
