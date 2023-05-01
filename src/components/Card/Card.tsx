import React, { FC } from 'react';
import styles from './Card.module.scss';
import { CardProps, CardSize, CardType} from './types';
import { RatingEmptyIcon } from 'src/assets/icons/RatingEmptyIcon';
import { RatingIcon } from 'src/assets/icons/RatingIcon';
import { type } from 'os';

export const MOCK_CARD = {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud",
        authors: "Julien Vehent",
        publisher: "Manning",
        isbn10: "1617294136",
        isbn13: "9781617294136",
        pages: "384",
        year: "2018",
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
                  "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
               }
    }


const Card: FC<CardProps> = ({ card, size }) => {
    const { image, title, authors, year, price, rating } = card;

   


    
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
