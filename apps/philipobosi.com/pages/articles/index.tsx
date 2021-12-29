import type { NextPage } from "next";
import Link from "next/link";
import Page from "../../components/design-system/Page";

import styles from "../styles/articles.module.scss";
import { getAllPosts } from "helpers/markdownLoader";

type ArticlesPageProps = NextPage & { allPosts: any[] };

const ArticlesPage: React.FC<ArticlesPageProps> = ({ allPosts }) => {
  return (
    <Page className={styles.ArticlesPage}>
      <header className={styles.ArticlesPage_hero}>
        <h1 className={styles.ArticlesPage_hero_ttl}>R/ARTICLES</h1>
        <p className={styles.ArticlesPage_hero_desc}>
          I like to get things out of my head in a structured manner. Could be
          anything really. More recently it's mostly ideas, opinions, technical
          knowledge, experiences around product, startups, the creator economy
          and web3.
        </p>
      </header>
      <section className={styles.ArticlesPage_posts}>
        {allPosts.map(({ title, slug, excerpt, content }) => {
          return (
            <Link href={`/articles/${slug}`} key={slug}>
              <a className={styles.ArticlesPage_posts_item}>
                <h2 className={styles.ArticlesPage_posts_item_ttl}>{title}</h2>
                {/* <p className={styles.ArticlesPage_posts_item_desc}>{excerpt}</p> */}
              </a>
            </Link>
          );
        })}
      </section>
    </Page>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content",
  ]);

  return {
    props: { allPosts },
  };
}

export default ArticlesPage;
