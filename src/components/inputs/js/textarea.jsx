import React from 'react';
import '../css/textarea.css';

export const TextArea = (props) => {
    return (
        <>
            <label className='form-label' htmlFor={props.id}>{props.title}</label>
            <textarea className='form-control'
                      typeof={props.type}
                      placeholder={props.placeholder}
                      value={props.value}
                      id={props.id}
                      name={props.name}
                      required={props.required}
                      rows={props.rows}
                      onChange={props.onChange}
                      onFocus={props.onFocus}
                      onBlur={props.onBlur}/>
            <div className="invalid-feedback">
                {props.messageerror}
            </div>
        </>
    )
};