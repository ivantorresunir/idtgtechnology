import React from 'react';

export const Input = (props) => {
    return (
        <>
            <label className='form-label' htmlFor={props.id}>{props.title}</label>
            <input className='form-control' type={props.type} placeholder={props.placeholder} value={props.value}
                   id={props.id} required={props.required}/>
            <div className="invalid-feedback">
                {props.messageerror}
            </div>
        </>
    )
};