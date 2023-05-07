import { CardProps } from "../Card/types";
import React, { FC } from "react";
import styles from "./BookCard.module.scss";
import { RatingEmptyIcon } from "src/assets/icons/RatingEmptyIcon";
import { RatingIcon } from "src/assets/icons/RatingIcon";
import { ButtonType, CardType } from "src/utils/@globalTypes";
import Tabs from "../Tabs/Tabs";
import { FacebookIcon } from "src/assets/icons/FacebookIcon";
import { TwitterIcon } from "src/assets/icons/TwitterIcon";
import { MoreIcon } from "src/assets/icons/MoreIcon";
import Subscribe from "../Subscribe/Subscribe";
import { LikeCartIcon } from "src/assets/icons/LikeCartIcon";
import Button from "../Button/Button";
import { MoreDetails } from "src/assets/icons/MoreDetails";
import Similar from "../Similar/Similar";

type BookCardProps = {
  card: CardType;
};

enum TabsNames {
  Description,
  Authors,
  Reviews,
  SignIn,
  SignUp,
}

enum TabsBlock {
  Description,
  SignIn,
}

const BookCard: FC<BookCardProps> = ({ card }) => {
  const { image, title, authors, year, price, rating } = card;
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.titlePageContainer}>
          <div className={styles.titlePage}>{title}</div>
        </div>
        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <button className={styles.btnLike}>
              <LikeCartIcon />
            </button>
            <img src={image} className={styles.image} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.priceString}>
              <div className={styles.price}>{price}</div>
              <div className={styles.rating}>
                <RatingEmptyIcon />
              </div>
            </div>
            <div className={styles.String}>
              <div className={styles.detail}></div>
              <div className={styles.value}>{authors}</div>
            </div>
            <div className={styles.String}>
              <div className={styles.detail}></div>
              <div className={styles.value}>{authors}</div>
            </div>
            <div className={styles.String}>
              <div className={styles.detail}></div>
              <div className={styles.value}>{authors}</div>
            </div>
            <div className={styles.String}>
              <div className={styles.detail}></div>
              <div className={styles.value}>{authors}</div>
            </div>
                      <div className={styles.more}>{'More details'}<MoreDetails/></div>
            <Button
              title={"Add to cart"}
              onClick={() => {}}
              type={ButtonType.Primary}
              className={styles.button}
            />
            <a className={styles.preview}>{"Preview book"}</a>
          </div>
        </div>
        <Tabs
          title="Description"
          key={TabsNames.Description}
          tabsBlock={TabsBlock.Description}
        />
        <div className={styles.content}></div>
      </div>
      <div className={styles.iconContainer}>
        <FacebookIcon />
        <TwitterIcon />
        <MoreIcon />
      </div>

          <Subscribe />
          <Similar/>
    </div>
  );
};
export default BookCard;
