import React from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames";

import styles from "./PagesContainer.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const PagesContainer = () => {
    return (
      <div
        className={classNames(styles.container)}
      >
        <Header />
        <div className={styles.mainInfo}>
          <Outlet />
            </div>
        <Footer />
      </div>
    );
  };
  
  export default PagesContainer;