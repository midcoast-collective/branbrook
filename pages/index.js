import Head from "next/head";

import { Header, Footer } from "../components";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Branbrook Construction, LLC</title>
      </Head>

      <Header />

      <div className={styles.hero} />

      <div className="global-wrap">
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
