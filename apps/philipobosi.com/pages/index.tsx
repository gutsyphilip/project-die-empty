import type { NextPage } from "next";
import Link from "next/link";
import Page from "../components/design-system/Page";
import pageData from "data/pageData/index";
import styles from "./styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <Page className={styles.IndexPage}>
      <div style={{ position: "relative" }}>
        <header className={styles.IndexPage_hero}>
          <h1 className={styles.IndexPage_hero_ttl} data-ttl="Hello! I'm Philip.">PHILIPOBOSI&copy;</h1>
          <div className={styles.IndexPage_hero_desc}>
            <p>
              I am archiving the most useful parts of my life on the internet in hopes of dying empty(bold… I know). I am a creator who loves to ideate and bring things to life. Could be music, videos, or digital products.
            </p>
            <p>
              Speaking of digital products, I have been privileged to help build software at several startups including <a
                href="https://54gene.com" target="_blank">54gene</a>, <a href="https://kudi.com" target="_blank">Kudi</a> and <a href="https://trybrass.com" target="_blank">Brass</a>.
            </p>

            <p>I <Link href="/articles"><a>write articles</a></Link> on topics ranging from my career to technical stuff and general experiences.</p>
            <p>I keep <a href="https://www.getrevue.co/profile/gutsyphilip" target="_blank">a diary on my experiences as a creator and my journey through making things.</a></p>
          </div>
        </header>
      </div>

      <section className={styles.IndexPage_categories}>
        {/* {pageData.categories.map(({ title, desc, url }) => {
                    return (
                        <Link href={url} key={title} scroll>
                            <a className={styles.IndexPage_categories_item}>
                                <h2 className={styles.IndexPage_categories_item_ttl}>
                                    {title}
                                </h2>
                                <p className={styles.IndexPage_categories_item_desc}>{desc}</p>
                            </a>
                        </Link>
                    );
                })} */}
      </section>
    </Page>
  );
};

export default Home;
