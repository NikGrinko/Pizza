import React from 'react';
import logo from '../source/logo.svg';
import PropTypes from 'prop-types';
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
Logo.propTypes = {
    discription: PropTypes.string
}
Logo.defaultProps = {
    discription: 'Самая вкусная пицца во вселенной'
}

export default Logo;