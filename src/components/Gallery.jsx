import React from 'react';
import PizzaCard from './PizzaCart';
import PizzaLoading from './PizzaLoading';
import PropTypes from 'prop-types';


const Gallery = ({ items, categoryNames, category, isLoaded, onClickAddPizza, localCurrent }) => {

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
Gallery.propTypes = {
    items: PropTypes.array,
    categoryNames: PropTypes.array,
    category: PropTypes.number,
    isLoaded: PropTypes.bool,
    onClickAddPizza: PropTypes.func,
    localCurrent: PropTypes.object
}
Gallery.defaultProps = {
    categoryNames: ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"],
    category: null,
    isLoaded: false
}
export default Gallery;