import React, {useEffect, useMemo, useState} from 'react';
import {Modal} from "./components/Modal/Modal";
import {Notice} from "./components/Notice/Notice";
import {Cards} from "./components/Cards/Cards";
import {ICard} from "./types";
import {shuffleArray} from "./utils";

import {data} from "./cards";

const MAX_OPENED_CARDS = 2
const MAX_MOVES = 40
const MAX_CARDS = 16
const DELAY = 1000

export const App = () => {
    const [cards, setCards] = useState<ICard[] | []>([])
    const [movesMade, setMovesMade] = useState(0)
    const [openedCards, setOpenedCards] = useState<ICard[] | []>([])
    const [guessesCount, setGuessesCount] = useState(0)

    useEffect(() => {
        setCards(shuffleArray(data))
    }, [])

    useEffect(() => {
        if (openedCards.length === MAX_OPENED_CARDS) {
            const img1 = openedCards[0].img
            const img2 = openedCards[1].img
            if (img1 === img2) {
                setGuessesCount(prev => prev + 2)
                if (guessesCount + 2 === MAX_CARDS) {
                    setCards(cards.map(c => c.img === img1 ? {...c, hidden: true} : c))
                } else {
                    setTimeout(() => {
                        setCards(cards.map(c => c.img === img1 ? {...c, hidden: true} : c))
                    }, DELAY)
                }
            } else {
                setTimeout(() => {
                    setCards(cards.map(c => c.img === img1 || c.img === img2 ? {...c, opened: false} : c))
                }, DELAY)
            }

            setTimeout(() => setOpenedCards([]), DELAY)
        }
    }, [openedCards])

    const openCard = (card: ICard) => {
        if (openedCards.length < MAX_OPENED_CARDS) {
            setMovesMade((prev) => prev + 1)
            setOpenedCards([...openedCards, card])
            setCards(cards.map(c => c.id === card.id ? {...c, opened: true} : c))
        }
    }

    const restart = () => {
        setCards(shuffleArray(data))
        setMovesMade(0)
        setGuessesCount(0)
    }

    const result = useMemo(() => {
        if (movesMade === MAX_MOVES && guessesCount < MAX_CARDS) {
            return 'loss'
        }
        if (guessesCount === MAX_CARDS) {
            return 'win'
        }
    }, [movesMade ,guessesCount])

    return (
        <div className='app'>
            <div className="container">
                <h1>MEMORY</h1>
                <div className="app__content">
                    <Notice text='Сделано ходов' count={movesMade}/>
                    <Cards cards={cards} openCard={openCard} disable={openedCards.length === MAX_OPENED_CARDS}/>
                    <Notice text='Осталось попыток' count={MAX_MOVES - movesMade}/>
                </div>
            </div>
            {result && <Modal count={movesMade} result={result} restartGame={restart}/>}
        </div>
    );
};
