import React from 'react';
import '../css/gallery-products.css';

export const GalleryProducts = (props) => {
    return (
        <div className='gallery-product'>
            {props.gallery.map((gallery, i) => {
                return (
                    <React.Fragment key={i}>
                        <div className='size-img px-4'>
                            <div className='card card-product'>
                                <img alt="" src={gallery.img} className='d-block w-100'/>
                                <div className='card-body'>
                                    <h6 className='card-title text-center'><strong>{gallery.label}</strong>
                                    </h6>
                                    <div className='row'>
                                        <div className='col-md-6 col-sm-12'>
                                            <h6 className='text-center price-v'>${gallery.priceone}</h6>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <h6 className='text-center price-a'><s>${gallery.pricetwo}</s></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    )
};