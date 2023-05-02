import React, { FC } from 'react';
import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardType } from 'src/components/Card/types';
import { CardSize } from 'src/components/Card/types';


type CardsListProps = {
    cardsList: CardType[];
}

const CardsList: FC<CardsListProps> = ({cardsList}) => {
    
    return (
        <div>
            <div className={styles.cardsContainer}>
                {cardsList.map((item, index) => {
                        if (index > 0) {
                            return <Card key={item.isbn13} card={item} size={CardSize.Main} />
                        }
                    })
                }
                
            </div>
        </div >
    ) 
}

export default CardsList;