import React, { useState, useEffect, useMemo } from "react";
import styles from "./YourCart.module.scss";
import Title from "src/components/Title";
import Button from "src/components/Button";
import { ButtonType, CardSize } from "src/utils/@globalTypes";
import { BackArrowIcon } from "src/assets/icons/BackArrowIcon";
import { MOCK_ARRAY } from "../Home/Home";
import CardsList from "src/components/CardsList/CardsList";

const YourCart = () => {
  const onCheckOutClick = () => {
    {
      <link href="https://pay.raschet.by/" rel="stylesheet"></link>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <BackArrowIcon />
      </div>
      <Title title="Your cart" />
          <CardsList cardsList={MOCK_ARRAY} size={CardSize.YourCart} />
         <div className={styles.lastChild}>
      <div className={styles.totalContainer}>
        <div className={styles.sumTotal}>
          <div className={styles.textSumTotal}>{"Sum total"}</div>
          <div className={styles.priceSumTotal}>{"$ 69.26"}</div>
        </div>
        <div className={styles.vat}>
          <div className={styles.textVat}>{"VAT"}</div>
          <div className={styles.priceVat}>{"$ 12.50"}</div>
        </div>
        <div className={styles.Total}>
          <div className={styles.textTotal}>{"TOTAL"}</div>
          <div className={styles.priceTotal}>{"$ 81.76"}</div>
        </div>
        <div className={styles.button}>
          <Button
            title={"Check out"}
            onClick={onCheckOutClick}
            type={ButtonType.Primary}
          />
        </div>
          </div>
          </div> 
    </div>
  );
};

export default YourCart;
