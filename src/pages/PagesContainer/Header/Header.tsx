import React, { useMemo, useState, KeyboardEvent } from "react";
import styles from "./Header.module.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UserName from "src/components/UserName";
import classNames from "classnames";
import { LikeIcon } from "src/assets/icons/LikeIcon";
import { ShoppingBagIcon } from "src/assets/icons/ShoppingBagIcon";
import { UserIcon } from "src/assets/icons/UserIcon";
import { LogoIcon } from "src/assets/icons/LogoIcon";
import Input from "src/components/Input/Input";
import { SearchIcon } from "src/assets/icons/SearchIcon";
import { ButtonType } from "src/utils/@globalTypes";
import Button from "src/components/Button/Button";
import { CloseIcon } from "src/assets/icons/CloseIcon";
import { OpenMenu } from "src/assets/icons/OpenMenu";
import { RoutesList } from "src/pages/Router";
import { BurgerIcon } from "src/assets/icons/BurgerIcon";
import { getSearchedPosts } from "src/redux/reducers/cardSlice";
import { useDispatch } from "react-redux";

const Header = () => {
//   const [isOpened, setOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };
  const [username, setUsername] = useState("");
  const onChangeName = (value: string) => {
    setUsername(value);
  };

  const navigate = useNavigate();
  const location = useLocation();


  const onFavoritesClick = () => {
    navigate(RoutesList.Favorites);
  };
  const onShoppingBagClick = () => {
    navigate(RoutesList.Cart);
  };
  const onAccountClick = () => {
    navigate(RoutesList.Account);
  };
  const onBookstoreClick = () => {
    navigate(RoutesList.Home);
  };

  const navButtonsList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      {
        title: "Favorites",
        key: RoutesList.Favorites,
      },
      {
        title: "Cart",
        key: RoutesList.Cart,
      },
    ],
    []
  );
    const dispatch = useDispatch();
    
  const onClickSearchIcon = () => {
    dispatch(getSearchedPosts(searchValue));
    navigate(RoutesList.Search);
    };
    
    
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearchIcon();
    }
  };
 
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <div onClick={onBookstoreClick}>
            <LogoIcon />
          </div>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.inputWithButton}>
                      <input placeholder="Search"
                           value={searchValue}
                        //    onChange={onChangeSearchValue}
                           onKeyDown={onKeyDown}
                          className={styles.input}></input>
            <div onClick={onClickSearchIcon} className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <div onClick={onFavoritesClick}>
            <LikeIcon />
          </div>
          <div onClick={onShoppingBagClick}>
            <ShoppingBagIcon />
          </div>
          <div onClick={onAccountClick}>
            <UserIcon />
          </div>
        </div>
      </div>
      {/* <Button
        title={isOpened ? <CloseIcon /> : <BurgerIcon />}
        onClick={onClickMenuButton}
        type={ButtonType.Close}
        className={styles.button}
      /> */}
    </>
  );
};

export default Header;
