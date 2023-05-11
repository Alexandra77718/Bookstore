import React, { FC } from "react";
import { CardListType, CardSize } from "src/utils/@globalTypes";
import Card from "src/components/Card";
import styles from "./SearchCardList.module.scss";
import EmptyState from "../EmptyState/EmptyState";



type SearchCardListProps = {
  cardsList: CardListType;
};
const SearchCardList: FC<SearchCardListProps> = ({ cardsList }) => {

  return (
    <div className={styles.container}>
      {cardsList.map((item, index) => {
        return <Card key={item.isbn13} card={item} size={CardSize.SearchShort} />;
      })}
          <div>all results</div>
    </div>
  ) 
};
export default SearchCardList;