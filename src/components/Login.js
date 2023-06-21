import React from 'react';
//import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//import registration from './registration';

//<Router>
//   <Routes>
//     <Route exact path='./registration' Component={registration} />
//</Routes>
//</Router>

export default function Login() {
    return (
        <div className="main__container">
            <div className="container">
                <p className="title">wardrobe</p>
                <p className="entri__reg">Вход</p>
                <input type='email' placeholder='Почта' id='email' className="em__ps" />
                <input type='password' placeholder='Пароль' id='password' className="em__ps" />
                <a href='#' className="ps__href">Забыли пароль?</a>
                <div className="flex-wrapper-one">
                    <a href='#' className="ak__href">Создать аккаунт</a>
                    <button type='reset' className="main__button">
                        <div className="btn">Войти</div>
                    </button>
                </div>
            </div>
        </div>
    )

}
