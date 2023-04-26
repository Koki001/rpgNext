import { useState } from "react";
import descriptions from "@/src/helpers/statDescriptions";
import {
  increaseStat,
  decreaseStat,
  addName,
} from "@/src/store/slices/characterSlice";
import styles from "./Create.module.scss";
import "animate.css";
import "react-tooltip/dist/react-tooltip.css";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { Tooltip } from "react-tooltip";
import { endEncounter } from "@/src/store/slices/progressSlice";
import { useRouter } from "next/router";

const Stats = () => {
  const router = useRouter();
  const playerStats = useAppSelector((getPlayer) => getPlayer.player);
  const attributePoints = useAppSelector(
    (getPlayer) => getPlayer.player.attrPoints
  );
  const [points, setPoints] = useState(10);
  const dispatch = useAppDispatch();

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetStat = e.currentTarget.id as keyof typeof playerStats;
    if (attributePoints > 0 && Number(playerStats[targetStat]) < 20) {
      dispatch(increaseStat(targetStat));
    } else {
      console.log("all points spent");
    }
  };
  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetStat = e.currentTarget.id as keyof typeof playerStats;
    if (Number(playerStats[targetStat]) > 3) {
      dispatch(decreaseStat(targetStat));
    } else {
      console.log("minimum reached");
    }
  };

  const handleComplete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(endEncounter());
    if (playerStats.attrPoints > 0) {
      alert("please spend all attribute points");
    } else if (playerStats.name === "") {
      alert("please enter a name");
    } else {
      router.push("/game");
    }
  };

  return (
    <div className={styles.stats}>
      <h3>Attribute points: {attributePoints}</h3>
      {Object.keys(playerStats)?.map((item, index) => {
        const value = playerStats[item as keyof typeof playerStats];
        if (index > 3 && index < 10) {
          return (
            <div className={styles.statCount} key={index}>
              <p
                data-tooltip-id="stat-tooltip"
                data-tooltip-content={
                  descriptions[item as keyof typeof descriptions]
                }
                className={
                  value === 3
                    ? styles.red
                    : value === 20
                    ? styles.green
                    : styles.statTooltip
                }
              >
                {item}: {value}
              </p>

              <div className={styles.attrButtons}>
                <button
                  type="button"
                  className={styles.leftArrow}
                  id={item}
                  onClick={handleDecrease}
                ></button>
                <button
                  type="button"
                  className={styles.rightArrow}
                  id={item}
                  onClick={handleIncrease}
                ></button>
              </div>
            </div>
          );
        }
      })}
      <div className={styles.completeContainer}>
        {playerStats.type !== "" && (
          <>
            <input
              placeholder="Adventurer name..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(addName(e.target.value))
              }
              type="text"
            />
            <button onClick={handleComplete}>Start!</button>
          </>
        )}
      </div>
      <Tooltip
        place="left"
        style={{ width: "450px", opacity: "1", zIndex: "100" }}
        id="stat-tooltip"
      />
    </div>
  );
};

export default Stats;
