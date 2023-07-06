import React, {FC, useState} from 'react';

import './Card.css'
import {ICard} from "../../types";

interface Props {
    card: ICard
    openCard: () => void
}
export const Card:FC<Props> = ({card, openCard}) => {
    const [open, setOpen] = useState(false)

    const cardClasses = `card ${card.opened ? 'card--open' : ''} ${card.hidden ? 'card--hidden' : ''}`

    return (
        <div className={cardClasses} onClick={openCard}>
            <div className='card__content'>
                {card.opened
                    ? <img className='card__img' src={card.img} alt=''/>
                    : <p>K/C</p>
                }
            </div>
        </div>
    );
};