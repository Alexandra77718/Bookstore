import React, { useMemo, useState } from "react";
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

const Header = () => {
  const [username, setUsername] = useState("");
  const onChange = (value: string) => {
    setUsername(value);
  };
  const [isOpened, setOpened] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const onClickMenuButton = () => {
    setOpened(!isOpened);
  };

  const onAuthButtonClick = () => {
    navigate(RoutesList.SignIn);
    };
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

  return (
    <>
      <div className={styles.headerContainer}>
              <div className={styles.logo}>
                  <div onClick={onBookstoreClick}><LogoIcon /></div>
          
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.inputWithButton}>
            <input placeholder="Your email" className={styles.input}></input>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </div>
              <div className={styles.iconsContainer}>
                  <div onClick={onFavoritesClick}><LikeIcon /></div>
                  <div onClick={onShoppingBagClick}><ShoppingBagIcon /></div>
                  <div onClick={onAccountClick}><UserIcon /></div>
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
