import React from 'react';
import '../css/gallery.css';

export const Gallery = (props) => {
    return (
        <>
            <h3 className='text-center'>{props.title}</h3>
            <div className='gallery'>
                {props.gallery.map((gallery, i) => {
                        return (
                            <React.Fragment key={i}>
                                <div className='w-100'>
                                    <div className='card card-product'>
                                        <img src={gallery.img} className='d-block w-100 px-4' alt=''/>
                                        <div className='card-body'>
                                            <h5 className='card-title text-center'><strong>{gallery.label}</strong></h5>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>);
                })}
            </div>
        </>
    )
};