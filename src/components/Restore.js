import React from 'react';
//import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//import registration from './registration';

//<Router>
//   <Routes>
//     <Route exact path='./registration' Component={registration} />
//</Routes>
//</Router>

export default function Restore() {
    return (
        <div className="main__container">
            <div className="container">
                <p className="title">wardrobe</p>
                <p className="entri__reg">Восстановление пароля</p>
                <input type='email' placeholder='Почта' id='email' className="em__ps" />
                <div className="flex-wrapper-one res__wrap">
                    <a href='#' className="ak__href res__href">Назад</a>
                    <button type='reset' className="main__button">
                        <div className="btn">Войти</div>
                    </button>
                </div>
            </div>
        </div>
    )

}
