import React, {useState, FC, ReactNode } from 'react';
import styles from './Tabs.module.scss';
import classNames from 'classnames';
import { TabsNames } from 'src/utils/@globalTypes';


export type TabsProps =  {
    title: string,
    key: TabsNames;
    disabled?: boolean,
    tabsBlock: ReactNode;
}
enum TabsBlock {
    Description,
        SignIn,
}

export const TABS_LIST_DESCRIPTION = [
    {
        title: 'Description',
        disabled: false,
        key: TabsNames.Description,
    },
    {
        title: 'Authors',
        disabled: false,
        key: TabsNames.Authors,
    },
    {
        title: 'Reviews',
        disabled: false,
        key: TabsNames.Reviews,
    },
];
export const TABS_LIST_SIGN_IN = [
    {
        title: 'Sign In',
        disabled: false,
        key: TabsNames.SignIn,
    },
    {
        title: 'Sign Up',
        disabled: false,
        key: TabsNames.SignUp,
    },
];

const TabsStyles = {
    [TabsBlock.Description]: styles.Description,
    [TabsBlock.SignIn]: styles.SignIn,

}
const Tabs: FC<TabsProps> = ({ title, key, disabled, tabsBlock}) => {
    const [activeTab, setActiveTab] = useState(TabsNames.Description);
    const onTabClick = (key: TabsNames) => () => setActiveTab(key);

    const [activeTabSignIn, setActiveTabSignIn] = useState(TabsNames.SignIn);
    const onTabSignInClick = (key: TabsNames) => () => setActiveTabSignIn(key);

    return tabsBlock === TabsBlock.Description ? (
        <div className={styles.containerDescription}>
            {TABS_LIST_DESCRIPTION.map((tab) => {
                return (
                    <div key={tab.key} className={classNames(styles.DescriptionTab, {
                        [styles.activeTab]: activeTab === tab.key,
                        [styles.disabled]: tab.disabled,
                    })}
                        onClick={tab.disabled ? undefined : onTabClick(tab.key)}>
                        {tab.title}
                        </div>
                )
            })}
        </div>
    ) : (
        <div className={styles.containerSignIn}>
            {TABS_LIST_SIGN_IN.map((tab) => {
                return (
                    <div key={tab.key} className={classNames(styles.SignInTab, {
                        [styles.activeTab]: activeTabSignIn === tab.key,
                        [styles.disabled]: tab.disabled,
                    })}
                        onClick={tab.disabled ? undefined : onTabSignInClick(tab.key)}>
                        {tab.title}
                        </div>
                )
            })}
        </div>
    )
}
export default Tabs;