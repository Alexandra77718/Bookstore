import React, { useEffect} from "react";
import styles from "./Home.module.scss";
import Title from "src/components/Title/Title";
import CardsList from "src/components/CardsList/CardsList";
import { CardSize } from "src/components/Card/types";
import Subscribe from "src/components/Subscribe/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { CardSelectors, getAllPosts } from "src/redux/reducers/cardSlice";



const Home = () => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getAllPosts());
  }, []);

    const postsList = useSelector(CardSelectors.getAllPosts);

  return (
    <div>
      <Title title={"New Releases Books"} />
          <CardsList cardsList={postsList} size={CardSize.Main} />
      <Subscribe />
    </div>
  );
};

export default Home;
