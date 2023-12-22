import React from 'react';
import '../css/header.css';
import logo from '../../../images/logo_entity_label.png'
import {ButtonPrimary} from '../../buttons/js/button';

export const Header = (prop) => {
    return (
        <>
            <div className='header'>
                <nav className='navbar header__content'>
                    <img className='img-fluid header__logo-tob-bar' src={logo} alt='Logo IDTG'/>
                    <form className='d-flex'>
                        <input className='form-control me-2' type='search' placeholder='Que buscas?' required/>
                        <ButtonPrimary className='btn btn-outline-primary-white' type='submit'
                                       name='Buscar'>Search</ButtonPrimary>
                    </form>
                    <div className='d-flex'>
                        <img className='img-fluid header__logo-avatar' src={prop.img} alt='Logo IDTG'/>
                        <div className='d-grid justify-content-center'>
                            <i className="bi bi-cart4 text-white font-sizes-icon"></i>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};