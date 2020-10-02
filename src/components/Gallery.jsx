import React from 'react';
import PizzaCard from './PizzaCart';
import { useSelector, useDispatch } from 'react-redux';


const Gallery = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    console.log(items)
    return (
        <div className='gallery'>
            <h2 className='gallery__title'>
                Все пиццы
                </h2>
            <div className='gallery__container'>
                <ul className='card-list'>
                    {items.map((data) => <PizzaCard key={data.id} data={data} />)}
                </ul>
            </div>
        </div>
    )
}
export default Gallery;