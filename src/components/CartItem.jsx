import React from 'react';

const CartItem = ({ item, globalItem, removeItem, minusItem, plusItem }) => {


    return (
        <li className='pizza-item'>
            <div className="pizza-item__info">
                <div className="info-image">
                    <img src={item.imageUrl} alt="pizza of cart" />
                </div>
                <div className='info-text'>
                    <h2 className='info-text__title'>{item.name}</h2>
                    <p className='info-text__specifications'>{item.type} тесто, {item.size}.</p>
                </div>
            </div>
            <div className='pizza-item__quantity-buttons'>
                <button onClick={() => minusItem(item.id)} className="minus-pizza"></button>
                <div className='quantity-buttons-current'>{globalItem[item.id].items.length}</div>
                <button onClick={() => plusItem(item.id)} className='plus-pizza'></button>
            </div>
            <div className='pizza-item__section-price'>{globalItem[item.id] ? globalItem[item.id].totalPrice : 0} ₽</div>
            <button onClick={() => removeItem(item.id)} className='pizza-item__delete-section'></button>
        </li>
    )
}

export default CartItem;