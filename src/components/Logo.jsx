import React from 'react';
import logo from '../source/logo.svg';
const Logo = ({ discription }) => {
    return (
        <div className='logo'>

            <div className='logo-image'>
                <img src={logo} alt="logoImage" />
            </div>
            <div>
                <h1 className='logo-title'>REACT PIZZA</h1>
                <p className='logo-description'>{discription}</p>
            </div>

        </div>

    )
}
export default Logo;