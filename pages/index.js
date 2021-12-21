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
        <div className="global-wrap">
          <p>We’re constructing safe, affordable and</p>
          <p>reliable innovation, out of sight, but</p>
          <p>always with our customers in mind.</p>
        </div>
      </div>

      <div className="global-wrap">
        <div className={styles.caption}>
          <img src="/team.jpg" alt="" />

          <p>
            Through the inspiration of the late Steve Grooms (co-founder), the
            passion to which our family encompases, and the empowerment of our
            faith, the Grooms family continues to build a company whose sole
            purpose is to serve the Kingdom and the needs of others. Branbrook
            is constructing networks, one relationship at a time.
          </p>
        </div>
      </div>

      <div className={styles.centeredText}>
        <div className="global-wrap">
          <p>
            Branbrook approaches business using the 3 F's: <b>Faith</b>,{" "}
            <b>Family</b>, and <b>Friendships</b>. At Branbrook, we strive to be
            the fair, reliable, efficient, safe and affordable choice for all
            your innovative utility construction projects.
          </p>
        </div>
      </div>

      <div className={styles.blocks}>
        <img src="/one.jpg" alt="" />
        <img src="/two.jpg" alt="" />
        <img src="/three.jpg" alt="" />
        <img src="/four.jpg" alt="" />
      </div>

      <Footer />
    </>
  );
};

export default Home;
