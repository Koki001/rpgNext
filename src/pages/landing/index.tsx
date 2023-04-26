import Link from "next/link";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <>
      <div className={styles.landingContainer}>
        <h1>Game Title</h1>
        <h2>
          <Link href={"/create"}>New Game</Link>
        </h2>
        <h2>
          <Link href={"/options"}>Options</Link>
        </h2>
        <h2>
          <Link href={"/"}>About</Link>
        </h2>
      </div>
    </>
  );
};

export default Landing;
