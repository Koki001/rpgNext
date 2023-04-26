import { useAppSelector } from "@/src/store/hooks";
import styles from "./Bars.module.scss";

const PlayerExp = () => {
  const player = useAppSelector((getPlayer) => getPlayer.player);
  return (
    <div className={`${styles.playerExp} ${styles.bar}`}>
      <p>Experience: {player.experience} / 100</p>
      <div className={styles.expBar}></div>
    </div>
  );
};

export default PlayerExp;
