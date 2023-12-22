import React from 'react';

export const TextArea = (props) => {
    return (
        <>
            <label className='form-label' htmlFor={props.id}>{props.title}</label>
            <textarea className='form-control' typeof={props.type} placeholder={props.placeholder} value={props.value}
                      id={props.id} required={props.required} rows={props.rows}/>
            <div className="invalid-feedback">
                {props.messageerror}
            </div>
        </>
    )
};