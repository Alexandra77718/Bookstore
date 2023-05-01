import React, { useState } from "react";
import styles from "./App.module.scss";
import Button, { ButtonType } from "./components/Button/Button";
import { LikeIcon } from "./assets/icons/LikeIcon";
import { LogoIcon } from "./assets/icons/LogoIcon";
import UserName from "./components/UserName/UserName";
import Tabs from "./components/Tabs/Tabs";
import Title from "./components/Title/Title";
import { RatingIcon } from "./assets/icons/RatingIcon";
import { RatingEmptyIcon } from "./assets/icons/RatingEmptyIcon";
import { ShoppingBagIcon } from "./assets/icons/ShoppingBagIcon";
import { UserIcon } from "./assets/icons/UserIcon";
import { SearchIcon } from "./assets/icons/SearchIcon";
import { BurgerIcon } from "./assets/icons/BurgerIcon";
import { CloseIcon } from "./assets/icons/CloseIcon";
import { FacebookIcon } from "./assets/icons/FacebookIcon";
import { TwitterIcon } from "./assets/icons/TwitterIcon";
import { MoreIcon } from "./assets/icons/MoreIcon";
import { BackArrowIcon } from "./assets/icons/BackArrowIcon";
import { PlusIcon } from "./assets/icons/PlusIcon";
import { MinusIcon } from "./assets/icons/MinusIcon";
import { ShoppingEllipseIcon } from "./assets/icons/ShoppingEllipseIcon";
import { PopularArrowIcon } from "./assets/icons/PopularArrowIcon";
import Card, { MOCK_CARD } from "./components/Card/Card";
import { CardSize } from "./components/Card/types";
import { CardProps } from "./components/Card/types";

const App = () => {
  const [username, setUsername] = useState("");

  const onChange = (value: string) => {
    setUsername(value);
  };

  return (
      <div>
          <Card card={MOCK_CARD} size={CardSize.Main} />
      <Button title={"Primary"} type={ButtonType.Primary} onClick={() => {}} />
      <Button
        title="Disabled"
        type={ButtonType.Primary}
        onClick={() => {}}
        disabled
      />
      <Button title={"Close"} type={ButtonType.Close} onClick={() => {}} />
      <Button title={"Like"} type={ButtonType.Like} onClick={() => {}} />
      <LikeIcon />
      <div>
        <UserName username={username} />
      </div>
      <Tabs />
      <LogoIcon />
      <RatingIcon />
      <RatingEmptyIcon />
      <Title title="New Releases Books" />
      <ShoppingBagIcon />
      <UserIcon />
      <BurgerIcon />
      <CloseIcon />
      <FacebookIcon />
      <TwitterIcon />
      <MoreIcon />
      <BackArrowIcon />
      <PlusIcon />
      <MinusIcon />
      <PopularArrowIcon />
      <ShoppingEllipseIcon />
      <SearchIcon />
    </div>
  );
};

export default App;

