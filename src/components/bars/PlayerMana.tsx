import { useAppSelector } from "@/src/store/hooks";
import styles from "./Bars.module.scss";

const PlayerMana = () => {
  const player = useAppSelector((getPlayer) => getPlayer.player);
  return (
    <div className={`${styles.playerMana} ${styles.bar}`}>
      <p>Mana: {player.mana}</p>
      <div className={styles.manaBar}></div>
    </div>
  );
};

export default PlayerMana;
