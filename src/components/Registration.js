import React from 'react'

export default function Registration() {
    return (
        <div className="group-91">
            <div className="group-90">
                <p className="wardrobe">wardrobe</p>
                <p className="registracija">Регистрация</p>
                <div className="flex-wrapper-one">

                    <input type='text' placeholder='Имя' id='reg_name' className="search" />
                    <input type='text' placeholder='Фамилия' id='reg_sur' className="search-two" />

                </div>
                <input type='email' placeholder='Почта' id='reg_email' className="search-three" />
                <div className="flex-wrapper-two">
                    <input type='password' placeholder='Пароль' id='reg_password' className="search-four" />
                    <input type='password' placeholder='Подтвердить пароль' id='reg_password-confirm' className="search-four" />
                </div>
                <p className="pass__info">
                    Пароль должен содержать не менее восьми знаков,
                    включать заглавные и строчные буквы.
                </p>
                <div className="flex-wrapper-two">
                    <p className="vojti">Войти</p>
                    <button type='reset' className="search-six">
                        <div className="btn">Зарегистрироваться</div>
                    </button>

                </div>
            </div>
        </div>
    )

}
