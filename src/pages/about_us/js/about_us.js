import React from 'react';
import '../css/about_us.css'
import img from '../../../images/quienes_somos.png'
import imge from '../../../images/logo-etiquetas.png'

export const About_us = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={img} alt=''/>
                    </div>
                    <div className='col-6 d-grid align-content-center'>
                        <div className='p-3'>
                            <h5 className='text-center'>
                                Somos la empresa líder en Colombia para la venta de
                                artículos electronicos y novedades del mercado.
                            </h5>
                            <br/>
                            <h5 className='text-center'>
                                Contamos con la experiencia en venta y distribución de artículos, lo que nos posiciona
                                como referente a nivel nacional.
                            </h5>
                            <br/>
                            <h5 className='text-center'>
                                Siempre estamos a la vanguardia de la industria, innovando en todos y cada uno de
                                nuestros productos, llevando a nuestros clientes las últimas tendencias del mercado, con
                                excelentes estándares: calidad, precios bajos (garantizados) y el mejor servicio.
                            </h5>
                            <br/>
                            <h5 className='text-center'>
                                Compra tus productos desde Super Compras, nos encargamos de todo!
                                Siempre con los mejores precios y calidad. ¡Garantizamos el mejor precio!
                            </h5>
                            <div className='text-center'>
                                <img src={imge} className='img-fluid logo-etiqueta' alt=''/>
                            </div>
                            <h5 className='text-center'>
                                Contamos con una red de transporte y alianzas estratégicas que nos permiten tener un
                                cubrimiento a lo largo del 100% del territorio nacional, con un tiempo servicio óptimo y
                                una operación flexible que se ajuste a la necesidad de nuestros clientes.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};