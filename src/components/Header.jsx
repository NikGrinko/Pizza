import React from 'react';
import Logo from './Logo';
import CartButton from './CartButton';
import { useSelector } from 'react-redux';
const Header = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart)


    return (<div className="header">
        <div className='header__wrapper'>
            <Logo />
            <CartButton totalPrice={totalPrice} totalCount={totalCount} />
        </div>
    </div>
    )
}
export default Header;