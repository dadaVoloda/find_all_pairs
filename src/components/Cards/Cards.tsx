import React, {FC} from 'react';

import './Cards.css'

import {ICard} from "../../types";
import {Card} from "../Card/Card";

interface Props {
    cards: ICard[]
    disable: boolean
    openCard: (card: ICard) => void
}

export const Cards:FC<Props> = ({cards, disable, openCard}) => {
    return (
        <div className={`cards ${disable ? 'cards--disabled' : ''}`}>
            {cards.map(card => (
                <Card card={card} key={card.id} openCard={() => openCard(card)}/>
            ))}
        </div>
    )
};
