import React, {FC} from 'react';

import './Notice.css'

interface Props {
    text: string,
    count: number
}

export const Notice:FC<Props> = ({text, count}) => {
    return (
        <div className='notice'>
            <p className='notice__text'>{text}</p>
            <p className='notice__count'>{count}</p>
        </div>
    );
};
