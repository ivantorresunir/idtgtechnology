import React from 'react';
import '../css/button.css'

export const ButtonPrimary = (props) => {
    return (
        <>
            <button className={props.className} type={props.type} id={props.id}>{props.name}</button>
        </>
    )
};