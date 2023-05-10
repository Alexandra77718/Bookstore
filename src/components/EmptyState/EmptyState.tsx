import classNames from "classnames";
import React, { FC } from "react";
import styles from './EmptyState.module.scss';
import { EmptyStateIcon } from "src/assets/icons/EmptyStateIcon";



type EmptyStateProps = {
    title: string;
    description: string;
}


const EmptyState: FC<EmptyStateProps> = ({ title, description }) => {
    return <div className={styles.container}>
        <EmptyStateIcon />
        <div  className={styles.title}>{title}</div>
        <div  className={styles.description}>{description}</div>
    </div>
}

export default EmptyState;