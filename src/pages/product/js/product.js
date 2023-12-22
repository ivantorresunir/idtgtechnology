import React from 'react';
import '../css/product.css';
import {GalleryProducts} from "../../../components/gallery/js/gallery-products";

import img1 from '../../../images/CorrecN.png';
import img2 from '../../../images/FeN.png';
import img3 from '../../../images/LazoP.png';
import img4 from '../../../images/TobiP.png';
import img5 from '../../../images/PlaP.png';
import img6 from '../../../images/Talo2.png';
import img7 from '../../../images/RodiV.png';
import img8 from '../../../images/GorroN.png';


const galleryProducts = [
    {img: img1, label: 'Corrector de postura', priceone: '39.999', pricetwo: '60.000'},
    {img: img2, label: 'Férula', priceone: '39.999', pricetwo: '60.000'},
    {img: img3, label: 'Lazo', priceone: '39.999', pricetwo: '60.000'},
    {img: img4, label: 'Tobillera', priceone: '39.999', pricetwo: '60.000'},
    {img: img5, label: 'Platillos', priceone: '39.999', pricetwo: '60.000'},
    {img: img6, label: 'Talonera', priceone: '39.999', pricetwo: '60.000'},
    {img: img7, label: 'Rodillera', priceone: '39.999', pricetwo: '60.000'},
    {img: img8, label: 'Gorro', priceone: '39.999', pricetwo: '60.000'}];

export const Product = () => {
    return (
        <>
            <div className='container-fluid my-3'>
                <GalleryProducts gallery={galleryProducts}></GalleryProducts>
            </div>
        </>
    )
};