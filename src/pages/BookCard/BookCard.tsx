import React, { FC, useEffect, useState } from "react";
import styles from "./BookCard.module.scss";
import { RatingEmptyIcon } from "src/assets/icons/RatingEmptyIcon";
import { RatingIcon } from "src/assets/icons/RatingIcon";
import { ButtonType, CardListType, CardType } from "src/utils/@globalTypes";
import Tabs from "../../components/Tabs/Tabs";
import { FacebookIcon } from "src/assets/icons/FacebookIcon";
import { TwitterIcon } from "src/assets/icons/TwitterIcon";
import { MoreIcon } from "src/assets/icons/MoreIcon";
import Subscribe from "../../components/Subscribe/Subscribe";
import { LikeCartIcon } from "src/assets/icons/LikeCartIcon";
import Button from "../../components/Button/Button";
import { MoreDetails } from "src/assets/icons/MoreDetails";
import Similar from "../../components/Similar/Similar";
import { useDispatch, useSelector } from "react-redux";
import {
  CardSelectors,
  setSavedPosts,
  setStatus,
  getSinglePost,
  setSinglePost,
} from "src/redux/reducers/cardSlice";
import { ActiveLikeCartIcon } from "src/assets/icons/ActiveLikeCartIcon";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { RoutesList } from "src/pages/Router";
import { BackArrowIcon } from "src/assets/icons/BackArrowIcon";
import { BookCardProps, BookCardType } from "../../components/Card/types";
import YourCart from "src/pages/YourCart/YourCart";
import CardsList from "../../components/CardsList/CardsList";
import { type } from "os";
import Card from "../../components/Card/Card";

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

const BookCard = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.Description);
  const onTabClick = (key: TabsNames) => () => setActiveTab(key);

//   const getCurrentList = () => {
//       switch (activeTab) {
//           case TabsNames.Description:
//               return singlePost?.desc
//           case TabsNames.Authors:
//               return singlePost?.authors
//           case TabsNames.Reviews:
//               return singlePost?.pdf?.["Chapter 2"]
//   }
//   };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { isbn13 } = params;

  const singlePost = useSelector(CardSelectors.getSinglePost);
  const likedCards = useSelector(CardSelectors.getLikedCards);
  useEffect(() => {
    if (isbn13) {
      dispatch(getSinglePost(isbn13));
    }
  }, []);

  const onStatusClick = () => {
    if (singlePost) {
      dispatch(setStatus(singlePost));
    }
  };

  const likedIndex = likedCards.findIndex(
    (post) => post.isbn13 === singlePost?.isbn13
  );
  // реализация сохранения поста в корзину YourCart
  const savedPosts = useSelector(CardSelectors.getSavedPosts);
  const savedPostsIndex = savedPosts.findIndex(
    (post) => post.isbn13 === singlePost?.isbn13
  );

  const onSavedCartClick = () => {
    if (singlePost) {
      dispatch(setSavedPosts(singlePost));
    }
    navigate(RoutesList.Cart);
  };

  return singlePost ? (
    <div>
      <div className={styles.back}>
        <BackArrowIcon />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.titlePageContainer}>
          <div className={styles.titlePage}>{singlePost.title}</div>
        </div>
        <div className={styles.imageInfo}>
          <div className={styles.imageContainer}>
            <div className={styles.likeContainer}>
              <div onClick={onStatusClick}>
                {likedIndex > -1 ? <ActiveLikeCartIcon /> : <LikeCartIcon />}
              </div>
            </div>

            <img src={singlePost.image} className={styles.image} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.priceString}>
              <div className={styles.price}>{singlePost.price}</div>
              <div className={styles.rating}>
                <RatingEmptyIcon />
              </div>
            </div>
            <div className={styles.String}>
              <div className={styles.detail}></div>
              <div className={styles.value}>{singlePost.authors}</div>
            </div>
            <div className={styles.String}>
              <div className={styles.detail}></div>
              <div className={styles.value}>{singlePost.publisher}</div>
            </div>
            <div className={styles.String}>
              <div className={styles.detail}></div>
              <div className={styles.value}>{singlePost.pages}</div>
            </div>
            <div className={styles.String}>
              <div className={styles.detail}></div>
              <div className={styles.value}>
                {singlePost.pdf?.["Chapter 2"]}
              </div>
            </div>
            <div className={styles.more}>
              {"More details"}
              <MoreDetails />
            </div>
            <Button
              title={"Add to cart"}
              onClick={onSavedCartClick}
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
              <div className={styles.content}>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <FacebookIcon />
        <TwitterIcon />
        <MoreIcon />
      </div>

      <Subscribe />
      <Similar />
    </div>
  ) : null;
};
export default BookCard;
