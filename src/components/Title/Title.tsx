import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Title.module.scss';

type TitleProps = {
    title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
    return(
        <span className={styles.title}>{title}</span>
    )
};

export default Title;

// import React, { FC } from 'react';
// import styles from 

// const  = () => {
    //     return (
//         <div></div>
//     )
// }
// export default ;