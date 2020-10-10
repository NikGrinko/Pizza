import React from 'react';
import PizzaCard from './PizzaCart';
import PizzaLoading from './PizzaLoading';
import { useSelector, useDispatch } from 'react-redux';


const Gallery = ({ items, categoryNames, category, isLoaded, onClickAddPizza, localCurrent }) => {
    const dispatch = useDispatch();




    return (
        <div className='gallery'>
            <h2 className='gallery__title'>
                {category === null ? 'Все пиццы' : categoryNames[category]}
            </h2>
            <div className='gallery__container'>
                <ul className='card-list'>
                    {isLoaded ? (items.map((data) => <PizzaCard localCurrent={localCurrent[data.id] && localCurrent[data.id].items.length} onClickAddPizza={onClickAddPizza} {...data} key={data.id} data={data} />))
                        :
                        Array(3)
                            .fill(0)
                            .map((q, index) => <PizzaLoading key={index} />)}

                </ul>
            </div>
        </div>
    )
}
export default Gallery;