import React, { useState, useEffect, useMemo } from "react";
import styles from "./Favorites.module.scss";
import Title from "src/components/Title";
import Button from "src/components/Button";
import { ButtonType, CardSize } from "src/utils/@globalTypes";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesList } from "../Router";
import { BackArrowIcon } from "src/assets/icons/BackArrowIcon";
import { useDispatch } from "react-redux";
import Card from "src/components/Card/Card";
import { MOCK_ARRAY } from "../Home/Home";
import CardsList from "src/components/CardsList/CardsList";

const Favorites = () => { 
    return (
        <div className={styles.container}>
            <div className={styles.back}>
          <BackArrowIcon />
        </div>
        <Title title="Favorites" />
            <CardsList cardsList={MOCK_ARRAY} size={CardSize.Favorites} />
        </div>
    )
}

export default Favorites;
