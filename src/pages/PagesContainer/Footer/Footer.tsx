import React, { FC } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div>©2022 Bookstore</div>
        <div>All rights reserved</div>
      </div>
    </div>
  );
};
export default Footer;
