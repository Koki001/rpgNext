import Head from "next/head";
import Link from "next/link";
import { startEncounter } from "@/src/store/slices/progressSlice";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Game.module.scss";
import FightView from "@/src/components/encounter/FightView";
import { playerMotion } from "@/src/utils/playerMotion";
import ScreenControls from "@/src/components/game/ScreenControls";
import collisionCheck from "@/src/utils/collisionCheck";
import { addEnemy } from "@/src/store/slices/enemySlice";
import enemyStats from "@/src/helpers/enemyStats";

const GameStart = () => {
  const interval = useRef(0);
  const [isMoving, setIsMoving] = useState(false);
  const [getReady, setGetReady] = useState(false);
  const screenRef = useRef<any>(null);
  const playerRef = useRef<any>(null);
  const orcRef = useRef<any>(null);
  const playerCollision = useRef<any>();
  const orcCollision = useRef<any>();
  const [position, setPosition] = useState({
    top: 250,
    left: 100,
  });
  const player = useAppSelector((getPlayer) => getPlayer.player);
  const progress = useAppSelector((getProgress) => getProgress.progress);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);
  useEffect(() => {
    if (isMoving) {
      const screenTop = screenRef.current?.offsetTop;
      const screenLeft = screenRef.current?.offsetLeft;
      interval.current = window.setInterval(() => {
        if (screenTop && screenLeft && playerRef.current && orcRef.current) {
          if (
            collisionCheck(
              playerCollision,
              orcCollision,
              playerRef,
              orcRef,
              screenRef
            )
          ) {
            setPosition((prev) => ({
              ...prev,
              top: playerRef.current?.offsetTop,
              left: playerRef.current?.offsetLeft,
            }));
            dispatch(
              addEnemy(enemyStats[orcRef.current.id as keyof typeof enemyStats])
            );
            setGetReady(true);
            setIsMoving(false);
            setTimeout(() => {
              setGetReady(false);
              dispatch(startEncounter());
            }, 3000);
            console.log("hit");
          }
        }
      }, 20);
    } else {
      window.clearInterval(interval.current);
      // console.log(playerCollision);
    }
  }, [isMoving, dispatch]);

  const handleMoveHere = (e: React.MouseEvent) => {
    const checker = e.target as HTMLElement;
    if (checker.nodeName === "DIV") {
      playerRef.current?.classList.remove(
        styles[`${player.type}RunLeft`],
        styles[`${player.type}RunRight`]
      );
      const topMouse = e.clientY;
      const leftMouse = e.clientX;
      const screenTop = screenRef.current?.offsetTop;
      const screenLeft = screenRef.current?.offsetLeft;
      const playerX = playerRef.current.getBoundingClientRect().left + 30;
      const playerY = playerRef.current.getBoundingClientRect().top + 30;
      if (e.type === "click" && screenTop && screenLeft) {
        setPosition((prev) => ({
          ...prev,
          top: topMouse - screenTop,
          left: leftMouse - screenLeft,
        }));
        if (
          leftMouse - 10 < playerX ||
          leftMouse - 10 > playerX ||
          topMouse - 10 < playerY ||
          topMouse - 10 > playerY
        ) {
          setIsMoving(true);
          playerMotion(leftMouse, topMouse, playerRef);
          if (leftMouse < playerX) {
            playerRef.current?.classList.add(styles[`${player.type}RunLeft`]);
          } else {
            playerRef.current?.classList.add(styles[`${player.type}RunRight`]);
          }
        }
      }
    }
  };

  const handleTransition = (e: any) => {
    setIsMoving(false);
    e.target.classList.remove(
      styles[`${player.type}RunLeft`],
      styles[`${player.type}RunRight`]
    );
  };

  return (
    <>
      <Head>
        <title>Game</title>
      </Head>
      {/* <main className="wrapper"> */}
      <div className={styles.main}>
        {!progress.encounter ? (
          <div
            ref={screenRef}
            onClick={handleMoveHere}
            className={styles.mainTop}
          >
            <span className={styles.blockTop}></span>
            {getReady && (
              <div
                onClick={(e) => e.stopPropagation()}
                className={styles.getReadyPopup}
              >
                <p>Get Ready to Fight!!!</p>
              </div>
            )}
            <div
              ref={playerRef}
              style={{ top: position.top, left: position.left }}
              className={`${styles.player} ${styles[player.type]}`}
              onTransitionEnd={handleTransition}
            ></div>
            <div id="orc" ref={orcRef} className={styles.orc}></div>
          </div>
        ) : (
          <FightView />
        )}
        <div className={styles.mainBottom}>
          <ScreenControls player={player} />
        </div>
      </div>
      <Link href={"/"}>Back to home</Link>
      {/* </main> */}
    </>
  );
};
export default GameStart;
