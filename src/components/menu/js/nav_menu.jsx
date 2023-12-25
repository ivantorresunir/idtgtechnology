import React from 'react';
import '../css/nav_menu.css';

export const NavMenu = (props) => {
    return (
        <nav>
            <ul className='navigation'>
                {props.menu.map((menu, i) => {
                    return (
                        <React.Fragment key={i}>
                            <li><a href={menu.uri}>{menu.menu}</a></li>
                        </React.Fragment>);
                })}
            </ul>
        </nav>
    )
};