import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/pages/Options.module.scss";

const GameOptions = () => {
  return (
    <>
      <Head>
        <title>Game Options</title>
      </Head>
      <div>
        <h1>Game Options</h1>
        <h2>
          <Link href={"/"}>Back to home</Link>
        </h2>
      </div>
    </>
  );
};
export default GameOptions;
