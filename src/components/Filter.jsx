import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Filter = React.memo(function Filter({ items, activeSortType, filterPizza }) {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [activeFilter, setActiveFilter] = useState(0);
    const filterRef = useRef();

    //Link for filter item
    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    //new filter
    const onSelectItem = (item) => {
        filterPizza(item)
        setActiveFilter(item.id)
        setVisiblePopup(false)
    }

    //click comparison
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(filterRef.current)) {
            setVisiblePopup(false);
        }
    }
    //click listener
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);

    }, [])
    return (
        <div ref={filterRef} className='filter'>
            <div onClick={toggleVisiblePopup} className='filter__header'>Сортировка по: <span className='item-selected'>{items[activeFilter].name}</span></div>

            <ul className={classNames("filter__select", { 'filter__select-active': visiblePopup })}>
                {items.map((item, index) => (
                    <li key={item.id} onClick={() => onSelectItem(item)}
                        className={activeSortType === item.type ? "filter__select-item filter__select-item-active" : "filter__select-item"}>{item.name}</li>))}
            </ul>

        </div >
    )
})
Filter.propTypes = {
    items: PropTypes.array,
    activeSortType: PropTypes.string,
    filterPizza: PropTypes.func

}
Filter.defaultProps = {
    activeSortType: 'popular'
}
export default Filter;


