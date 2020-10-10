import React, { useState } from 'react';
import classNames from 'classnames';

const SortPizza = ({ categoryNames, activeCategory, onClickCategory }) => {


    const [burger, setBurger] = useState(false);

    const toggleBurgerActive = () => {
        setBurger(!burger);
    }

    return (
        <div className='sort-block'>
            <div onClick={toggleBurgerActive} class={classNames('menu-icon', { 'clicked': burger })}>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <ul className={classNames('sort__list', { 'sort__list--active': burger })}>
                <li onClick={() => onClickCategory(null)} className={activeCategory === null ? 'sort__list-item sort__list-item-active' : 'sort__list-item'}>Все</li>
                {categoryNames.map((item, index) => {
                    return <li key={index}
                        onClick={() => onClickCategory(index)}
                        className={activeCategory === index ? 'sort__list-item sort__list-item-active' : 'sort__list-item'}>{item}</li>
                })}
            </ul>
        </div>
    )
}
export default SortPizza;