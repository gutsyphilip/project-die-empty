import type { NextPage } from 'next';
import Link from 'next/link';
import Page from '../../components/design-system/Page';

import styles from 'styles/pages/articles.module.scss';
import { getAllPosts } from 'helpers/markdownLoader';
import Hero from 'components/Hero';

type ArticlesPageProps = NextPage & { allPosts: any[] };

const ArticlesPage: React.FC<ArticlesPageProps> = ({ allPosts }) => {
  return (
    <div>
      <Hero>
        <div className={styles.articles_hero}>
          <p className={styles.articles_hero_desc}>
            “I like to get things out of my head in a structured manner. Could
            be anything really. More recently it's ideas, opinions and learnings
            from work, building product, startups, the creator economy and web
            3.0”
          </p>
        </div>
      </Hero>
      <div className={styles.articles_main}>
        <header>
          <h5>LATEST READS</h5>
        </header>
        <div className={styles.articles_main_list}>
          {allPosts?.map((article: any) => (
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <a className={styles.articles_main_list_item}>
                {article.title}
                <span>JAN 2022</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content',
  ]);

  return {
    props: { allPosts },
  };
}

export default ArticlesPage;
