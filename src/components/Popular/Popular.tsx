import React, { FC, useEffect } from "react";
import styles from "./Popular.module.scss";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { ButtonType } from "src/utils/@globalTypes";
import { PopularArrowIcon } from "src/assets/icons/PopularArrowIcon";
import { useDispatch, useSelector } from 'react-redux';
import CardsList from "../CardsList/CardsList";
import { CardSize } from "../Card/types";
import { CardSelectors, getAllPosts } from "src/redux/reducers/cardSlice";


const Popular = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts())
    }, []);

const postsList = useSelector(CardSelectors.getAllPosts);


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
          <CardsList cardsList={postsList} size={CardSize.Main} />
          </div>
    </div>
  );
};
export default Popular;
