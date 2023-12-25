import React from 'react';
import '../css/input.css';

export const Input = (props) => {
    return (
        <>
            <label className='form-label' htmlFor={props.id}>{props.title}</label>
            <input className='form-control'
                   type={props.type}
                   placeholder={props.placeholder}
                   value={props.value}
                   id={props.id}
                   name={props.name}
                   required={props.required}
                   onChange={props.onChange}
                   onFocus={props.onFocus}
                   onBlur={props.onBlur}/>
            <div className="invalid-feedback">
                {props.messageerror}
            </div>
        </>
    )
};