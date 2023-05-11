import React, { useState, useEffect, useMemo } from "react";
import styles from "./Favorites.module.scss";
import Title from "src/components/Title";
import Button from "src/components/Button";
import { ButtonType, CardSize } from "src/utils/@globalTypes";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesList } from "../Router";
import { BackArrowIcon } from "src/assets/icons/BackArrowIcon";
import { useDispatch, useSelector } from "react-redux";
import Card from "src/components/Card/Card";
import CardsList from "src/components/CardsList/CardsList";
import { CardSelectors, setStatus } from "src/redux/reducers/cardSlice";
import Popular from "src/components/Popular/Popular";



const Favorites = () => { 

    const favoritesList = useSelector(CardSelectors.getLikedCards);
    

    return (<div>
        <div className={styles.container}>
            <div className={styles.back}>
          <BackArrowIcon />
        </div>
        <Title title="Favorites" />
            <CardsList cardsList={favoritesList} size={CardSize.Favorites} />
            <Popular />
        </div>
    </div>
    )
}

export default Favorites;
