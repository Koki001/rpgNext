import Head from "next/head";
import Link from "next/link";
import Character from "../../components/create/CharacterForm";
import styles from "./NewGame.module.scss";

const NewGame = () => {
  return (
    <>
      <Head>
        <title>Create Character</title>
      </Head>
      <div className={styles.newGame}>
        <Character />
        <Link className={styles.exit} href={"/"}>
        </Link>
      </div>
    </>
  );
};
export default NewGame;
