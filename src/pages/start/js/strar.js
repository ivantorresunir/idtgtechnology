import React from 'react';
import '../css/start.css'
import {Carousel} from '../../../components/carousel/js/carousel';
import {Gallery} from "../../../components/gallery/js/gallery";

import imgCate1 from '../../../images/cate1.jpg';
import imgCate2 from '../../../images/cate2.jpg';
import imgCate3 from '../../../images/cate3.jpg';
import imgCate4 from '../../../images/cate4.jpg';

import img1 from '../../../images/carou1.jpg'
import img2 from '../../../images/carou2.jpg'
import img3 from '../../../images/carou13.jpg'

const gallery = [img1, img2, img3];

const galleryCate = [
    {img: imgCate1, label: 'Audio'},
    {img: imgCate2, label: 'Portatiles'},
    {img: imgCate3, label: 'Monitores'},
    {img: imgCate4, label: 'Accesorios'}];


export const Start = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='my-3'>
                    <Carousel nameid='#carousel-start' id='carousel-start' gallery={gallery}></Carousel>
                </div>
                <div className='my-3'>
                    <Gallery gallery={galleryCate} title='Categorias'></Gallery>
                </div>
            </div>
        </>
    )
};