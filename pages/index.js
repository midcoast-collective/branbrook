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
      <div className={styles.callout}>
        <div className={styles.calloutText}>
          <div className="global-wrap">
            <p>We’re constructing safe, affordable and</p>
            <p>reliable innovation, out of sight, but always</p>
            <p>with our customers in mind.</p>
          </div>
        </div>
      </div>

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
