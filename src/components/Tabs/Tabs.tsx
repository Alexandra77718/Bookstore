import React, { useState, FC, ReactNode } from "react";
import styles from "./Tabs.module.scss";
import classNames from "classnames";
import { TabsNames } from "src/utils/@globalTypes";
import { useSelector } from "react-redux";
import { CardSelectors } from "src/redux/reducers/cardSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { RoutesList } from "src/pages/Router";
import SingIn from "src/pages/SignIn/SignIn";
import SingUp from "src/pages/SignUp/SignUp";


export type TabsProps = {
  title: string;
  key: TabsNames;
  disabled?: boolean;
  tabsBlock: ReactNode;
};
enum TabsBlock {
  Description,
  SignIn,
}

export const TABS_LIST_DESCRIPTION = [
  {
    title: "Description",
    disabled: false,
    key: TabsNames.Description,
  },
  {
    title: "Authors",
    disabled: false,
    key: TabsNames.Authors,
  },
  {
    title: "Reviews",
    disabled: false,
    key: TabsNames.Reviews,
  },
];
export const TABS_LIST_SIGN_IN = [
  {
    title: "Sign In",
    disabled: false,
    key: TabsNames.SignIn,
  },
  {
    title: "Sign Up",
    disabled: false,
    key: TabsNames.SignUp,
  },
];

const TabsStyles = {
  [TabsBlock.Description]: styles.Description,
  [TabsBlock.SignIn]: styles.SignIn,
};
const Tabs: FC<TabsProps> = ({ title, key, disabled, tabsBlock }) => {

    const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(TabsNames.Description);
  const onTabClick = (key: TabsNames) => () => setActiveTab(key);

  const [activeTabSignIn, setActiveTabSignIn] = useState(TabsNames.SignIn);
    const onTabSignInClick = (key: TabsNames) => () => {
        setActiveTabSignIn(key);
    } 

  const singlePost = useSelector(CardSelectors.getSinglePost);

  const getCurrentList = () => {
    switch (activeTab) {
      case TabsNames.Description:
        return singlePost?.desc;
      case TabsNames.Authors:
        return singlePost?.authors;
      case TabsNames.Reviews:
        return (
          singlePost?.pdf?.["Chapter 2"] ||
            singlePost?.url ||
          singlePost?.subtitle
        );
    }
  };
 
  const switcherSignIn = () => {
    switch (activeTab) {
      case TabsNames.SignIn:
            return <SingIn />;
      case TabsNames.SignUp:
        return <SingUp />;
    }
    };
   

  return tabsBlock === TabsBlock.Description ? (
    <div>
      <div className={styles.containerDescription}>
        {TABS_LIST_DESCRIPTION.map((tab) => {
          return (
            <div>
              <div
                key={tab.key}
                className={classNames(styles.DescriptionTab, {
                  [styles.activeTab]: activeTab === tab.key,
                  [styles.disabled]: tab.disabled,
                })}
                onClick={tab.disabled ? undefined : onTabClick(tab.key)}
              >
                {tab.title}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classNames(styles.content)}>{getCurrentList()}</div>
    </div>
  ) : (
    <div>
      <div className={styles.containerSignIn}>
        {TABS_LIST_SIGN_IN.map((tab) => {
          return (
            <div
              key={tab.key}
              className={classNames(styles.SignInTab, {
                [styles.activeTab]: activeTabSignIn === tab.key,
                [styles.disabled]: tab.disabled,
              })}
              onClick={tab.disabled ? undefined : onTabSignInClick(tab.key)}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
      <div>{switcherSignIn()}</div>
    </div>
  );
};
export default Tabs;
