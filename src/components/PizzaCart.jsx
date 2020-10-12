import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const PizzaCard = ({ data, types, sizes, id, name, imageUrl, price, onClickAddPizza, localCurrent }) => {

    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = ['26 см', '30 см', '40 см']

    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);

    const onSelectType = (index) => {
        setActiveType(index);
    }
    const onSelectSize = (index) => {
        setActiveSize(index);
    }
    //Create and push new object pizza
    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[activeSize],
            type: availableTypes[activeType]
        };
        onClickAddPizza(obj);
    }

    return (
        <>
            <li className='card-item'>
                <div className='card-item__image'>
                    <img src={data.imageUrl} alt="Pizza" />
                </div>
                <div className="card-item__title">{data.name}</div>
                <div className="card-item__filters">
                    <div className="segmented-control">
                        {availableTypes.map((type, index) => (
                            <button key={type} disabled={!types.includes(index)} onClick={() => onSelectType(index)} className={classNames("segmented-control-select", {
                                "segmented-control-select-active": activeType === index,
                                'disabled': !types.includes(index),
                                'shadow': types.includes(index)
                            })}>{type}</button>
                        ))}
                    </div>
                    <div className="filter-size">
                        {availableSizes.map((size, index) => (
                            <button disabled={!sizes.includes(index)} key={size} onClick={() => onSelectSize(index)} className={classNames('filter-size-select', {
                                'filter-size-select-active': index === activeSize,
                                'disabled': !sizes.includes(index),
                                'shadow': sizes.includes(index)
                            })}>{size}</button>
                        ))}
                    </div>
                </div>
                <div className='card-item__result'>
                    <div className="card-item__result-price">
                        от {data.price} ₽
                    </div>
                    <button onClick={onAddPizza} className='add-card'><span className="button-plus"></span> Добавить <span className="button-current">{localCurrent ? localCurrent : 0}</span></button>
                </div>
            </li>
        </>
    )
}
PizzaCard.propTypes = {
    data: PropTypes.object,
    types: PropTypes.array,
    sizes: PropTypes.array,
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    onClickAddPizza: PropTypes.func,
    localCurrent: PropTypes.number

}
PizzaCard.defaultProps = {
    types: [0, 1],
    sizes: [0, 1, 2],
    id: 1,
    name: 'Маргарита',
    imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
    price: 300,
    localCurrent: undefined
}
export default PizzaCard;