import React from 'react';
import '../css/nav_menu.css';

export const NavMenu = () => {
    return (
        <nav>
            <ul className='navigation'>
                <li><link href='/'/><a href='/'>Home</a></li>
                <li><a href='/producto'>Productos</a></li>
                <li><a href='/nosotros'>Nosotros</a></li>
                <li><a href='/contacto'>Contacto</a></li>
            </ul>
        </nav>
    )
};