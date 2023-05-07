import React, { FC } from "react";
import styles from "./Card.module.scss";
import { CardProps, CardSize, CardType } from "./types";
import { RatingEmptyIcon } from "src/assets/icons/RatingEmptyIcon";
import { RatingIcon } from "src/assets/icons/RatingIcon";
import classNames from "classnames";

const Card: FC<CardProps> = ({ card, size }) => {
  const { image, title, authors, year, price, rating, isbn13 } = card;

  const isMain = size === CardSize.Main;
  const isYourCart = size === CardSize.YourCart;
  const isFavorites = size === CardSize.Favorites;
  const isSearchShort = size === CardSize.SearchShort;

  return (
      <div
        className={classNames({
          [styles.mainContainer]: isMain,
          [styles.yourCartContainer]: isYourCart,
          [styles.favoritesContainer]: isFavorites,
          [styles.searchShortContainer]: isSearchShort,
        })}
      >
        <div
          className={classNames({
            [styles.mainImageContainer]: isMain,
            [styles.yourCartImageContainer]: isYourCart,
            [styles.favoritesImageContainer]: isFavorites,
            [styles.searchShortImageContainer]: isSearchShort,
          })}
        >
          <img
            src={image}
            className={classNames({
              [styles.mainImage]: isMain,
              [styles.yourCartImage]: isYourCart,
              [styles.favoritesImage]: isFavorites,
              [styles.searchShortImage]: isSearchShort,
            })}
          ></img>
        </div>
        <div
          className={classNames({
            [styles.mainTitle]: isMain,
            [styles.yourCartTitle]: isYourCart,
            [styles.favoritesTitle]: isFavorites,
            [styles.searchShortTitle]: isSearchShort,
          })}
        >
          {title}

          <div
            className={classNames({
              [styles.mainAuthor]: isMain,
              [styles.yourCartAuthor]: isYourCart,
              [styles.favoritesAuthor]: isFavorites,
              [styles.searchShortAuthor]: isSearchShort,
            })}
          >
            {authors}
            {",  "}
            {year}
          </div>
        </div>
        <div
          className={classNames({
            [styles.mainPriceContainer]: isMain,
            [styles.yourCartPriceContainer]: isYourCart,
            [styles.favoritesPriceContainer]: isFavorites,
            [styles.searchShortPriceContainer]: isSearchShort,
          })}
        >
          <div
            className={classNames({
              [styles.mainPrice]: isMain,
              [styles.yourCartPrice]: isYourCart,
              [styles.favoritesPrice]: isFavorites,
              [styles.searchShortPrice]: isSearchShort,
            })}
          >
            {price}
          </div>

          {isYourCart ? null : (
            <div
              className={classNames({
                [styles.mainRatingContainer]: isMain,
                [styles.favoritesRatingContainer]: isFavorites,
                [styles.searchShortRatingContainer]: isSearchShort,
              })}
            >
              <RatingEmptyIcon />
              <RatingEmptyIcon />
              <RatingEmptyIcon />
              <RatingEmptyIcon />
              <RatingEmptyIcon />
            </div>
          )}
        </div>
      </div>
  );
};

export default Card;
