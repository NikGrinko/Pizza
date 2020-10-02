import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';

const SortPizza = ({ categoryNames, activeCategory, onClickCategory }) => {


    return (
        <div className='sort-block'>
            <ul className='sort__list'>
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