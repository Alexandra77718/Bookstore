import React, { FC } from 'react';
import styles from './UserName.module.scss';


type UserNameProps = {
    username: string,
    className?: string,
}
const UserName: FC<UserNameProps> = ({ username, className }) => {
    const userLogo: string = username.split(' ').map(elem => elem[0].toUpperCase()).join('')
    return (
        <div className={styles.container}>
            <div className={styles.userLogo}>
                <div className={styles.userLogoLetters}>{userLogo}</div>
            </div>
            <div className={styles.username}>{username}</div>
        </div>
    )
}

export default UserName;