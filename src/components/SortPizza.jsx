import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SortPizza = React.memo(function SortPizza({ categoryNames, activeCategory, onClickCategory }) {

    const [burger, setBurger] = useState(false);
    const sortRef = useRef();
    const burgerRef = useRef();

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current) && !path.includes(burgerRef.current)) {
            setBurger(false);
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, [])
    const toggleBurgerActive = () => {
        setBurger(!burger);
    }
    return (
        <div className='sort-block'>
            <div ref={burgerRef} onClick={toggleBurgerActive} className={classNames('menu-icon', { 'clicked': burger })}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className='sort-container'>
                <ul ref={sortRef} className={classNames('sort__list', { 'sort__list--active': burger })}>
                    <li onClick={() => onClickCategory(null)} className={activeCategory === null ? 'sort__list-item sort__list-item-active' : 'sort__list-item'}>Все</li>
                    {categoryNames.map((item, index) => {
                        return <li key={index}
                            onClick={() => onClickCategory(index)}
                            className={activeCategory === index ? 'sort__list-item sort__list-item-active' : 'sort__list-item'}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
})
SortPizza.propTypes = {
    categoryNames: PropTypes.array,
    activeCategory: PropTypes.number,
    onClickCategory: PropTypes.func
}
SortPizza.defaultProps = {
    categoryNames: ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"],
    activeCategory: null
}
export default SortPizza;

