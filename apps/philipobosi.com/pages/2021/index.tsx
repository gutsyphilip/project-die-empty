import React from "react";
import { Layout2021 } from "../../components/2021";

import styles from "./index.module.scss";

const Page2021 = () => {
  return (
    <Layout2021>
      <p className={styles.Page2021_intro}>
        {" "}
        This year started out like every other year. Pretty goal-less and
        cruise-driven. I generally don’t believe in having new year resolutions.
        I had spent the most of the previous year
      </p>
    </Layout2021>
  );
};

export default Page2021;
