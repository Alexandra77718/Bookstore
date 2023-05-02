import React, {FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

export enum ButtonType {
    Primary = "Primary",
    Close = "Close",
    Like = "Like",
};

type ButtonProps =  {
    title: string | ReactNode,
    onClick: () => void,
    type: ButtonType,
    disabled?: boolean,
    className?: string,
}

const btnStyles = {
    [ButtonType.Primary]: styles.primaryButton,
    [ButtonType.Close]: styles.closeButton,
    [ButtonType.Like]: styles.likeButton,

}

const Button: FC<ButtonProps> = ({ title, onClick, type, disabled, className }) => {
    const buttonClassName = btnStyles[type];

    return (
        <div onClick={disabled ? undefined : onClick} className={classNames(buttonClassName, className, {
            [styles.disabledButton]: disabled,
        })}>{title}</div>
    )
}
export default Button;


