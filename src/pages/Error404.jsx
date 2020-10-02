import React from 'react';
import Logo from '../components/Logo';
import ErrorImage from '../source/error.png'
import { NavLink } from 'react-router-dom';
const Error404 = () => {
    return (
        <div className='error'>
            <Logo />
            <div className='error__wrapper'>
                <div className='error__image'>
                    <img src={ErrorImage} alt="Error404" />
                </div>
                <div className='error__title'>
                    <h1>Упссс.. Тут нет пиццы (</h1>
                </div>
                <NavLink to='/' className='button-to-home'>Вернуть на главную</NavLink>
            </div>
        </div>
    )
}
export default Error404;