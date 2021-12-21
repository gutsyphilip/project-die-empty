import React from "react";
import cx from 'classnames';
import Link from "next/link";
import { ABOUTPAGE_URL, HOMEPAGE_URL } from "../../../data/pageRoutes";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
    <div className={styles.Navbar}>
      <Link href={HOMEPAGE_URL} passHref scroll>
        <a className={cx("vertical-text", styles.Navbar_logo)}>PHILIP OBOSI</a>
      </Link>

      {/* <Link href={ABOUTPAGE_URL} passHref scroll>
        <a className={styles.Navbar_about}>About</a>
      </Link> */}
    </div>
    
    <div className="vertical-text">Dedicated to dying empty.</div>
    </>
    

  );
};

export default Navbar;
