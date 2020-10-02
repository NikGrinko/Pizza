import React, { useState } from 'react';
import classNames from 'classnames';
const PizzaCard = ({ data }) => {

    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = ['26 см.', '30 см.', '40 см.']

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    }
    const onSelectSize = (index) => {
        setActiveSize(index);
    }


    return (
        <>
            <li className='card-item'>
                <div className='card-item__image'>
                    <img src={data.imageUrl} alt="Pizza Photo" />
                </div>
                <div className="card-item__title">{data.name}</div>
                <div className="card-item__filters">
                    <ul className="segmented-control">
                        {availableTypes.map((type, index) => (
                            <li key={type} onClick={() => onSelectType(index)} className={classNames("segmented-control-select", {
                                "segmented-control-select-active": activeType === index
                            })}>{type}</li>
                        ))}
                    </ul>
                    <ul className="filter-size">
                        {availableSizes.map((size, index) => (
                            <li key={size} onClick={() => onSelectSize(index)} className={classNames('filter-size-select', { 'filter-size-select-active': index === activeSize })}>{size}</li>
                        ))}
                    </ul>
                </div>
                <div className='card-item__result'>
                    <div className="card-item__result-price">
                        от 395 ₽
                    </div>
                    <button className='add-card'><span className="button-plus"></span> Добавить <span className="button-current">2</span></button>
                </div>
            </li>
        </>
    )
}
export default PizzaCard;