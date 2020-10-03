import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

const Filter = ({ items, activeSortType }) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const sortRef = useRef();

    //Link for filter item
    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    //new filter
    const onSelectItem = (item) => {

    }

    //click comparison
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    }
    //click listener
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);

    }, [])
    return (
        <div ref={sortRef} className='filter'>
            <div onClick={toggleVisiblePopup} className='filter__header'>Сортировка по: <span className='item-selected'>популярности</span></div>

            <ul className={classNames("filter__select", { 'filter__select-active': visiblePopup })}>
                {items.map((item, index) => (
                    <li onClick={() => onSelectItem(item)}
                        className={activeSortType === item.type ? "filter__select-item filter__select-item-active" : "filter__select-item"}>{item.name}</li>))}
            </ul>

        </div >
    )
}
export default Filter;