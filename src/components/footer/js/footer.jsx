import React from 'react';
import '../css/footer.css';

export const Footer = () => {
    return (
        <>
            <footer className='text-center footer-form'>
                <div className='row mt-3'>
                    <div className='col-md-6 col-sm-12'>
                        <h3 className='text-center text-white'>
                            Siguenos en nuestras redes sociales
                        </h3>
                        <div className='row my-3'>
                            <div className='text-center'>
                                <a className='text-white' href='https://instagram.com/atasportshop1?igshid=MzRlODBiNWFlZA=='>
                                    <i className='bi-instagram mx-3 font-sizes-icon'></i>
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=100074800135671' className='text-white'>
                                    <i className='bi-facebook mx-3 font-sizes-icon'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h3 className='text-center text-white'>
                            Canal de comunicación
                        </h3>
                        <div className='row my-3'>
                            <div className='text-center'>
                                <a href='https://api.whatsapp.com/send/?phone=' className='text-white'>
                                    <i className='bi-whatsapp mx-3 font-sizes-icon'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center text-white pb-0 mb-0'>©2023 IDTG Technology.</p>
            </footer>
        </>
    )
};