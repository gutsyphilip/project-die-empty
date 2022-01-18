import React from 'react'
import Hero from 'components/Hero';
import Link from 'next/link';


import styles from 'styles/pages/index.module.scss';


type IndexData = {
  archives: Array<{ name: string; url: string }>;
  otherAchives: Array<{ name: string; to: string }>;
};

const PAGE_DATA: IndexData = {
  archives: [
    {
      name: 'About',
      url: 'about',
    },
    {
      name: 'Articles',
      url: 'articles',
    },
    {
      name: 'Work',
      url: 'work',
    },
    {
      name: 'Newsletter',
      url: 'newsletter',
    },
  ],
  otherAchives: [
    {
      name: 'The Diary of a Creator',
      to: 'https://diaryofcreator.com',
    },
    {
      name: 'Pod Wey Don Cast',
      to: 'demos/params',
    },
  ],
};
export default function Index() {
  const { archives, otherAchives } = PAGE_DATA;

  return (
    <div>
      <Hero>
        <div className={styles.index_hero}>
          <p className={styles.index_hero_desc}>
            I am a creator, archiving the most useful parts of my life on the internet in hopes of dying empty.
          </p>
        </div>
      </Hero>
      <div className={styles.index_main}>
        <div className={styles.index_main_links}>
          {
            archives.map(({ name, url }) => {
              return <Link href={url} key={name}>{name}</Link>
            })
          }
        </div>
        <div className={styles.index_main_others}>
          <h6>OTHER ARCHIVES</h6>
          {
            otherAchives.map(({ name, to }) => {
              return <a href={to} target="_blank" rel='noreferrer' key={name}>{name}</a>
            })
          }
        </div>
      </div>
    </div>
  );
}
