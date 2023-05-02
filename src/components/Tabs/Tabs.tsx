import React, {useState, FC } from 'react';
import styles from './Tabs.module.scss';
import classNames from 'classnames';

enum TabsNames {
    Description = 0,
    Authors = 1,
    Reviews =2,
} 

const TABS_LIST = [
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
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(TabsNames.Description);
    const onTabClick = (key: TabsNames) => () => setActiveTab(key);

    return (
        <div className={styles.container}>
            {TABS_LIST.map((tab) => {
                return (
                    <div key={tab.key} className={classNames(styles.tab, {
                        [styles.activeTab]: activeTab === tab.key,
                        [styles.disabled]: tab.disabled,
                    })}
                        onClick={tab.disabled ? undefined : onTabClick(tab.key)}>
                        {tab.title}
                        </div>
                )
            })}

        </div>
    )
}
export default Tabs;