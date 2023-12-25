import './App.css';
import React from 'react';
import {Footer} from "./components/footer/js/footer";
import {Header} from "./components/header/js/header";
import {Body} from "./components/body/js/body";
import {NavMenu} from "./components/menu/js/nav_menu";
import avatar from './images/avatar.png'

import {Start} from "./pages/start/js/strar";
import {About_us} from "./pages/about_us/js/about_us";
import {Contact} from "./pages/contact/js/contact";
import {Product} from "./pages/product/js/product";
import {CreateProduct} from "./pages/administration/create_product/js/create_product";

const routes_menu = [
    {uri: '/', namePage: Start, menu: "Inicio"},
    {uri: '/producto', namePage: Product, menu: 'Productos'},
    {uri: '/nosotros', namePage: About_us, menu: 'Nosotros'},
    {uri: '/contacto', namePage: Contact, menu: 'Contacto'},
    {uri: '/crear_producto', namePage: CreateProduct, menu: 'Crear producto'}
];


export default function App() {
    return (
        <div className="App">
            <Header img={avatar}></Header>
            <div className='row'>
                <div className='col-2 nav-content'>
                    <NavMenu menu={routes_menu}></NavMenu>
                </div>
                <div className='col-10'>
                    <Body routes={routes_menu}></Body>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
