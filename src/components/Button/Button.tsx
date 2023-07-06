import React, {ButtonHTMLAttributes, FC} from 'react';
import './Button.css'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button:FC<Props> = (props) => {
    const {children, ...otherProps} = props
    return (
        <button {...otherProps} className='button' type="button">{children}</button>
    );
};
