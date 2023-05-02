import React, { FC } from 'react';
import styles from './UserName.module.scss';
import { UserIcon } from 'src/assets/icons/UserIcon';

type UserNameProps = {
    username: string,
    className?: string,
}
const UserName: FC<UserNameProps> = ({ username, className }) => {
    return username ?
    <div className={styles.container}>
                <div className={styles.userLogo}>
                <div className={styles.userLogoLetters}>{ username.split(' ').map(elem => elem[0].toUpperCase()).join('')}</div>
                </div>
                <div className={styles.username}>{username}</div>
            </div> : <UserIcon />
}

export default UserName;