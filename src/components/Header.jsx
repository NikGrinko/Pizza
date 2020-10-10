import React from 'react';
import Logo from './Logo';
import CartButton from './CartButton';
import { useSelector } from 'react-redux';
const Header = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart)
    const logoDiscription = 'Самая вкусная пицца во вселенной';

    return (<div className="header">
        <div className='header__wrapper'>
            <Logo discription={logoDiscription} />
            <CartButton totalPrice={totalPrice} totalCount={totalCount} />
        </div>
    </div>
    )
}
export default Header;