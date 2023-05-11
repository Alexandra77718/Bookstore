import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import Title from "src/components/Title/Title";
import CardsList from "src/components/CardsList/CardsList";
import { CardSize, CardType } from "src/components/Card/types";
import { useDispatch, useSelector } from "react-redux";
import { CardSelectors, getAllPosts } from "src/redux/reducers/cardSlice";
import EmptyState from "src/components/EmptyState/EmptyState";


const Search = () => {
    const searchValue = useSelector(CardSelectors.getSearchValue);
    const searchList = useSelector(CardSelectors.getSearchedPosts);
  const query: string = " ";
  const [cardsList, setCardsList] = useState<CardType[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return cardsList.length  > 0? (
    <div>
      <Title title={`${query}` + " " + "Search results"} />
      <div className={styles.found}>{" "}</div>
      <CardsList cardsList={searchList} size={CardSize.Main} />
    </div>
  ) : <EmptyState title="Sorry, there's no books" description='Try using search.'/>;
};

export default Search;
