import React from 'react';

const Button = (props) => {
    return (
        <button className="btn btn-primary py-0 px-3" onClick={ props.onButtonClick }>{ props.children }</button>
    )
}

export default Button;
