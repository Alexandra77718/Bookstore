import React, { FC } from 'react';
import styles from './Card.module.scss';
import { CardProps, CardSize, CardType} from './types';
import { RatingEmptyIcon } from 'src/assets/icons/RatingEmptyIcon';
import { RatingIcon } from 'src/assets/icons/RatingIcon';


const Card: FC<CardProps> = ({ card, size }) => {
    const { image, title, authors, year, price, rating, isbn13} = card;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} />
            </div>
            <div className={styles.titleContainer}>{title}</div>
            <div className={styles.authorsContainer}>{authors}{',  '}{year}</div>
            <div className={styles.priceContainer}>
                <div className={styles.price}>{price}</div>

                <div className={styles.ratingContainer}>
                    {(Number({ rating })) > 0 ?
                    <RatingIcon /> : <RatingEmptyIcon />}    
                </div>
            </div>
        </div>
    )
}

export default Card;
