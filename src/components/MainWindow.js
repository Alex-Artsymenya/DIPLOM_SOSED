import React from 'react'

export default function MainWindow() {
    return (
        <div>
            <div className="head">
                <p className="wardrobe">wardrobe</p>
                <div className="group-50">
                    <button className="poisk">
                        <img
                            alt=""
                            src="https://static.overlay-tech.com/assets/4b439eef-b990-42e5-bc6f-fb4b3c62a01c.svg"
                        />
                    </button>
                    <button className="notifications">
                        <div className="mdibell-outline">
                            <img
                                alt=""
                                className="vector-two"
                                src="https://static.overlay-tech.com/assets/a363b375-7fea-4a81-b41b-0f5f7ee961cb.svg"
                            />
                        </div>
                        <div className="ellipse-2"></div>
                    </button>

                    <img
                        alt=""
                        className="photo"
                        src="https://static.overlay-tech.com/assets/44a47c5d-6f31-4726-ae1c-ca79b6e95ba6.png"
                    />
                    <button className="flex-one">
                        <p className="kajli-dzhenner">Кайли Дженнер</p>
                        <p className="kylie-com">kylie&#64;gmail.com</p>
                    </button>
                </div>
            </div>
            <div className='control__wrapper'>
                <div className='control__item'>
                    <button className='control__btn'>
                        <img src='https://static.overlay-tech.com/assets/d652dcfb-bbb0-4c3b-af11-025a4759d71c.png' alt='Гардероб' className='control__img'></img>
                        <p className='control__title'>Гардероб</p>
                    </button>
                </div>
                <div className='control__item'>
                    <button className='control__btn'>
                        <img src='https://static.overlay-tech.com/assets/6f9fa701-c633-4b94-8dfb-0324bfa20ce7.png' alt='Образы' className='control__img'></img>
                        <p className='control__title'>Образы</p>
                    </button>
                </div>
                <div className='control__item'>
                    <button className='control__btn'>
                        <img src='https://static.overlay-tech.com/assets/ec8ddc81-f89c-4204-84b3-ec9b5f331974.png' alt='Подборки' className='control__img'></img>
                        <p className='control__title'>Подборки</p>
                    </button>
                </div>
                <div className='control__item'>
                    <button className='control__btn'>
                        <img src='https://static.overlay-tech.com/assets/b3ae9142-a5d3-41cd-9c34-080a92dd70e2.png' alt='Стирка' className='control__img'></img>
                        <p className='control__title'>Стирка</p>
                    </button>
                </div>
                <div className='control__item set_padding'>
                    <button className='control__btn'>
                        <img src='https://static.overlay-tech.com/assets/ca596568-0381-47f1-8728-20c2220038cf.png' alt='Настройки' className='control__img'></img>
                        <p className='control__title'>Настройки</p>
                    </button>
                </div>
                <div className='control__item'>
                    <button className='control__btn'>
                        <img src='https://static.overlay-tech.com/assets/668b3429-5f90-488f-a5a9-6530d4d43649.png' alt='Выход' className='control__img'></img>
                        <p className='control__title'>Выход</p>
                    </button>
                </div>


            </div>

        </div>

    )

}