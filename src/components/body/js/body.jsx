import React from 'react';
import '../css/body.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const Body = (props) => {
    return (
        <Router>
            <Routes>
                {props.routes.map((route, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Route path={route.uri} exact Component={route.namePage}></Route>
                        </React.Fragment>);
                })}
            </Routes>
        </Router>
    )
};