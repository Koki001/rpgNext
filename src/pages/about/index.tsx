import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="wrapper">
        <h1>About</h1>
        <h2>
          <Link href={"/"}>Back to home</Link>
        </h2>
      </div>
    </>
  );
};
export default About;
