import React from 'react';
import '../css/carousel.css'

export const Carousel = (props) => {
    return (
        <div id={props.id} className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-inner'>
                {props.gallery.map((gallery, i) => {
                    if (i === 0) {
                        return (
                            <React.Fragment key={i}>
                                <div className='carousel-item active' key={i}>
                                    <img src={gallery} className='d-block w-100 img-fluid' alt=''/>
                                </div>
                            </React.Fragment>);
                    } else {
                        return (
                            <React.Fragment key={i}>
                                <div className='carousel-item'>
                                    <img src={gallery} className='d-block w-100 img-fluid' alt='' key={i}/>
                                </div>
                            </React.Fragment>);
                    }
                })}
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target={props.nameid}
                    data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target={props.nameid}
                    data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    )
};