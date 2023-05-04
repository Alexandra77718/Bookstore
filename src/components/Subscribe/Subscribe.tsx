import React, { FC } from 'react';
import styles from './Subscribe.module.scss';
import Title from '../Title/Title';
import Button from '../Button/Button';
import { ButtonType } from 'src/utils/@globalTypes';

const Subscribe = () => {
        return (
            <div className={styles.container}>
                <div>
                    <Title title={"Subscribe to Newsletter"}/>
                    <div className={styles.description}>{'Be the first to know about new IT books, upcoming releases, exclusive offers and more.'}</div>
                    <div className={styles.inputWithButton}>
                        <input placeholder='Your email' className={styles.input}></input>
                        <Button title={'Subscribe'} onClick={() => { }} type={ButtonType.Primary} className={styles.button} />
                    </div>
                </div>
        </div>
    )
}
export default Subscribe;