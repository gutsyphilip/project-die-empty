import React from "react";
import cx from 'classnames';
import Link from "next/link";
import { ABOUTPAGE_URL, HOMEPAGE_URL } from "../../../data/pageRoutes";

import styles from "./Navbar.module.scss";

const LINKS = [
  {
    label: 'About',
    route: 'about'
  },
  {
    label: 'Articles',
    route: 'articles'
  }
]

const Navbar = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <Link href={HOMEPAGE_URL} passHref scroll>
          <a className={styles.Navbar_logo}>PHILIP OBOSI</a>
        </Link>

        <div className={styles.Navbar_nav}>
          {LINKS.map((link) => {
            return <Link href={link.route} key={link.route} passHref scroll>
              <a className={styles.Navbar_nav_link}>{link.label}</a>
            </Link>
          })}
        </div>

        <Link href={ABOUTPAGE_URL} passHref scroll>
          <a className={styles.Navbar_about}>Dark mode</a>
        </Link>
      </div>
    </>


  );
};

export default Navbar;
