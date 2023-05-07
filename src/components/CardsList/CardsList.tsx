import React, { FC } from 'react';
import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardType } from 'src/components/Card/types';
import { CardSize } from 'src/components/Card/types';
import { CardListType } from 'src/utils/@globalTypes';

type CardsListProps = {
    cardsList: CardListType,
    size: CardSize,
}

const CardsList: FC<CardsListProps> = ({cardsList, size}) => {
    
    return (
        <div>
            <div className={styles.cardsContainer}>
                {cardsList.map((item, index) => {
                        if (index > 0) {
                            return <Card key={item.isbn13} card={item} size={size}/>
                        }
                    })
                }
                
            </div>
        </div >
    ) 
}

export default CardsList;