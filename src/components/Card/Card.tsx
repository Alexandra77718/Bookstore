import React, { FC, useEffect } from "react";
import styles from "./Card.module.scss";
import { CardProps, CardSize, CardType } from "./types";
import { RatingEmptyIcon } from "src/assets/icons/RatingEmptyIcon";
import { RatingIcon } from "src/assets/icons/RatingIcon";
import classNames from "classnames";
import { LikeCartIcon } from "src/assets/icons/LikeCartIcon";
import {
  CardSelectors,
  getSinglePost,
  setSavedPosts,
  setStatus,
} from "src/redux/reducers/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "src/redux/store";
import { ActiveLikeCartIcon } from "src/assets/icons/ActiveLikeCartIcon";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "src/pages/Router";
import { CloseIcon } from "src/assets/icons/CloseIcon";
import YourCart from "src/pages/YourCart/YourCart";
import { MinusIcon } from "src/assets/icons/MinusIcon";
import { PlusIcon } from "src/assets/icons/PlusIcon";

const Card: FC<CardProps> = ({ card, size }) => {
  const { image, title, authors, year, price, rating, isbn13 } = card;

  const isMain = size === CardSize.Main;
  const isYourCart = size === CardSize.YourCart;
  const isFavorites = size === CardSize.Favorites;
  const isSearchShort = size === CardSize.SearchShort;

  const navigate = useNavigate();

  // реализация likedCards
  const dispatch = useDispatch();
  const onStatusClick = () => {
    if (card) {
      dispatch(setStatus(card));
    }
  };
  const likedCards = useSelector(CardSelectors.getLikedCards);

  const likedIndex = likedCards.findIndex(
    (post) => post.isbn13 === card.isbn13
  );

  const onBookCardClick = () => {
    navigate(`/books/${isbn13}`);
  };


  const onYourCartDeleteClick = () => {
    if (card) {
      dispatch(setSavedPosts(card));
    }
  };



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
        <div className={styles.likeContainer}>
          <div onClick={onStatusClick}>
            {likedIndex > -1 ? <ActiveLikeCartIcon /> : <LikeCartIcon />}
          </div>
        </div>
        <img
          onClick={onBookCardClick}
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
        onClick={onBookCardClick}
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
        {isYourCart ? (
          <div className={styles.cartCount}>
            <PlusIcon /><div></div><MinusIcon />
          </div>
        ) : null}
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
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingEmptyIcon />
          </div>
        )}
          </div>
          {isYourCart ? (
          <div onClick={onYourCartDeleteClick} className={styles.youCartDelete}>
            <CloseIcon />
          </div>
        ) : null}
    </div>
  );
};

export default Card;
