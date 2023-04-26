import { useState } from "react";
import Image from "next/image";
import "animate.css";
import styles from "./Create.module.scss";
import { defaultStats } from "@/src/helpers/defaultStats";
import { Default, DisplayClass } from "./Classes";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { addPlayer, addName } from "@/src/store/slices/characterSlice";
import { useRouter } from "next/router";
import { endEncounter } from "@/src/store/slices/progressSlice";

const Character = () => {
  const dispatch = useAppDispatch();
  const playerStats = useAppSelector((getPlayer) => getPlayer.player);
  const [currentClass, setCurrentClass] = useState("default");
  const router = useRouter();
  const classArray = [
    "default",
    "warrior",
    "mage",
    "rogue",
    "cleric",
    "paladin",
    "ranger",
    "necromancer",
  ];

  // const handleComplete = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   dispatch(endEncounter());
  //   console.log(playerStats);
  //   if (playerStats.attrPoints > 0) {
  //     alert("please spend all attribute points");
  //   } else if (playerStats.name === "") {
  //     alert("please enter a name");
  //   } else {
  //     router.push("/game");
  //   }
  // };
  return (
    <div className={styles.createContainer}>
      <form>
        <fieldset>
          <legend className="sr-only">Select Class:</legend>
          {classArray.map((item, index) => {
            if (item !== "default") {
              return (
                <div
                  className={`${styles.classContainer} ${
                    item === currentClass && styles.active
                  } animate__animated animate__zoomIn`}
                  key={index + "keyVals"}
                >
                  <input
                    autoComplete="off"
                    value={item}
                    checked={currentClass === item}
                    className="sr-only"
                    id={item}
                    type="radio"
                    name="classes"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(
                        addPlayer(
                          defaultStats[
                            e.currentTarget.value as keyof typeof defaultStats
                          ]
                        )
                      );
                      setCurrentClass(e.target.value);
                    }}
                  />
                  <label htmlFor={item}>{item}</label>
                  {item !== currentClass && (
                    <Image
                      className={styles.classImages}
                      src={`/assets/classIcons/${item}.png`}
                      alt="character icon"
                      width={128}
                      height={128}
                      priority
                    />
                  )}
                </div>
              );
            }
          })}
        </fieldset>
        <div className={styles.class}>
          {currentClass !== "default" ? <DisplayClass /> : <Default />}
        </div>
        {/* <div className={styles.completeContainer}>
          {currentClass !== "default" && (
            <div className={styles.name}>
              <label htmlFor="charName">Name:</label>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(addName(e.target.value))
                }
                type="text"
                id="charName"
              />
              <button onClick={handleComplete}>Complete</button>
            </div>
          )}
        </div> */}
      </form>
    </div>
  );
};
export default Character;
