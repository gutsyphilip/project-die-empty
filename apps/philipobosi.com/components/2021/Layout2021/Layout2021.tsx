import React from "react";
import styles from "./Layout2021.module.scss";

const Layout2021: React.FC = ({ children }) => {
  return (
    <section className={styles.Layout2021}>
      <div className={styles.Layout2021_left}>
        <h1 className={styles.Layout2021_left_ttl}>2021.</h1>
        <p>
          Ouuuu boy! This was quite a year. I’ll tell you all about it. It’s a
          relatively long story, so maybe grap a cup of coffee while at it.
        </p>
        <br />
        <br />
        <br />
        <p>... if you’re that interested.</p>
      </div>

      <div>{children}</div>
    </section>
  );
};

export default Layout2021;
