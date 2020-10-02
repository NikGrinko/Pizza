import React from 'react';
import Logo from './Logo';
import CartButton from './CartButton';
const Header = () => {
    return (<div className="header">
        <div className='header__wrapper'>
            <Logo />
            <CartButton />
        </div>
    </div>
    )
}
export default Header;