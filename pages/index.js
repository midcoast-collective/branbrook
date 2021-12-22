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

      <div className={styles.content}>
        <div className="global-wrap">
          <img src="/hero.jpg" alt="" />

          <h1>Branbrook Construction, LLC</h1>

          <p>
            In <b>1963</b> Francis Grooms purchased the family farm in Kidder,
            Missouri. For years, he and Ruth raised their three boys on the
            farm, working from sunrise to sunset raising grain and cattle. In{" "}
            <b>1993</b>, Steve, the youngest of the boys, and wife, June,
            purchased the farm to raise their two children, Brandon and Brooke.
            They renamed the farm Branbrook Farms. Through the years, Branbrook
            Farms has been a successful operation growing corn, soybeans and
            registered Angus cattle.
          </p>
          <p>
            In <b>2006</b>, Steve and Brandon decided to expand their
            entrepreneurial drive and created Branbrook Construction, LLC. With
            just a skid loader and backhoe, Brandon and Steve worked to grow the
            construction company doing various dirt and tree clearing projects.
            In <b>2007</b>, Brandon married Meagan and started their family,
            also residing on the family farm.
          </p>
          <p>
            In <b>2010</b>, Branbrook construction evolved into a utility
            construction company. They purchased a small case plow and traveled
            all over the midwest placing services to homes. Throughout the past
            decade, Branbrook has evolved into one of the region's premier
            contractors, using the latest technology in directional boring,
            excavation, and most importantly restoration. Our full line of
            equipment and well trained staff are always ready to safely and
            efficiently take on the next project.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
