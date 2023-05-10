import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import Title from "src/components/Title/Title";
import CardsList from "src/components/CardsList/CardsList";
import { CardSize, CardType } from "src/components/Card/types";
import Subscribe from "src/components/Subscribe/Subscribe";
import { useDispatch } from "react-redux";
import { getAllPosts } from "src/redux/reducers/cardSlice";


const Search = () => {
  const query: string = "beginners";
  const [cardsList, setCardsList] = useState<CardType[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div>
      <Title title={`${query}` + " " + "Search results"} />
      <div className={styles.found}>{"Found 196 books"}</div>
      <CardsList cardsList={cardsList} size={CardSize.Main} />
    </div>
  );
};

export default Search;
