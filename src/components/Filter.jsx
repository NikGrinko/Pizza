import React from 'react';

const Filter = () => {
    return (
        <div className='filter'>
            <div className='filter__header'>Сортировка по: <span className='item-selected'>популярности</span></div>

            <ul className="filter__select">
                <li className="filter__select-item filter__select-item-active">популярности</li>
                <li className="filter__select-item">по цене</li>
                <li className="filter__select-item">по алфавиту</li>
            </ul>

        </div>
    )
}
export default Filter;