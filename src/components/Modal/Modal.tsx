import React, {FC} from 'react';
import {Button} from "../Button/Button";

import './Modal.css'
interface Props {
    result: 'win' | 'loss',
    count: number,
    restartGame: () => void
}

export const Modal:FC<Props> = ({count, result, restartGame}) => {

    return (
        <div className='modal'>
            <div className="modal-body">
                <div className='modal-body__text'>
                    {result === 'win'
                        ? (
                            <>
                                <p>Ура, вы выиграли!</p>
                                <p>это заняло {count} ходов</p>
                            </>
                        )
                        : (
                            <>
                                <p>Увы, вы проиграли</p>
                                <p>У вас кончились ходы</p>
                            </>
                        )
                    }
                </div>
                <Button onClick={restartGame}>сыграть еще</Button>
            </div>
        </div>
    );
};
