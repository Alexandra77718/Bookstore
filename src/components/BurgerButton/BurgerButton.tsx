import React, { FC } from 'react';
import styles from './BurgerButton.module.scss';
import { CloseIcon } from "src/assets/icons/CloseIcon";
import { OpenMenu } from 'src/assets/icons/OpenMenu';
import Button from '../Button';
import {ButtonType} from "src/utils/@globalTypes";

type BurgerButtonProps = {
    isOpened: boolean;
    onClick: () => void;
}
const BurgerButton: FC <BurgerButtonProps>= ({isOpened, onClick}) => {
    return (
        <Button
            title={!isOpened ? <OpenMenu /> : <CloseIcon />}
            onClick={onClick}
            type={ButtonType.Primary}
            className={styles.burgerButton}
        />
    );
}
 
export default BurgerButton;