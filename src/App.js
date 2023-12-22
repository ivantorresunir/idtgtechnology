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

const routes = [
    {uri: '/', namePage: Start},
    {uri: '/producto', namePage: Product},
    {uri: '/nosotros', namePage: About_us},
    {uri: '/contacto', namePage: Contact},];

export default function App() {
    return (
        <div className="App">
            <Header img={avatar}></Header>
            <div className='row'>
                <div className='col-2 nav-content'>
                    <NavMenu></NavMenu>
                </div>
                <div className='col-10'>
                    <Body routes={routes}></Body>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
