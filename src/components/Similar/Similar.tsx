import React, { FC } from "react";
import styles from "./Similar.module.scss";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { ButtonType } from "src/utils/@globalTypes";
import { PopularArrowIcon } from "src/assets/icons/PopularArrowIcon";
import { MOCK_ARRAY } from "src/pages/Home/Home";
import CardsList from "../CardsList/CardsList";
import { CardSize } from "../Card/types";


const Similar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Title title={"Similar Book"} />
        <div className={styles.arrowContainer}>
          <div className={styles.arrowBack}>
            <PopularArrowIcon />
          </div>
          <div className={styles.arrow}>
            <PopularArrowIcon />
          </div>
        </div>
      </div>

          <div className={styles.cardContainer}>
          <CardsList cardsList={MOCK_ARRAY} size={CardSize.Main} />
          </div>
    </div>
  );
};
export default Similar;
