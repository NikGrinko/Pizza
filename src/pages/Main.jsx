import React, { useCallback, useEffect } from 'react';
import Header from '../components/Header';
import SortPizza from '../components/SortPizza';
import Filter from '../components/Filter';
import Gallery from '../components/Gallery';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filtersActions';
import { fetchPizzas } from '../redux/actions/pizzasActions';
import { addPizzaToCart } from '../redux/actions/cartActions';
const Main = () => {

    const dispatch = useDispatch();
    const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])
    const sortItem = [
        { id: 1, name: 'популярности', type: 'popular', order: 'desc' },
        { id: 2, name: 'цене', type: 'price', order: 'desc' },
        { id: 3, name: 'алфавиту', type: 'name', order: 'asc' },
    ]

    const addPizza = (obj) => {
        dispatch(addPizzaToCart(obj))
    }
    return (
        <React.Fragment>
            <Header />
            <div className='sort-container'>
                <SortPizza categoryNames={categoryNames} onClickCategory={onSelectCategory} activeCategory={category} categoryNames={categoryNames} />
                <Filter activeSortType={sortBy.type} items={sortItem} />
            </div>
            <Gallery onClickAddPizza={addPizza} isLoaded={isLoaded} items={items} categoryNames={categoryNames} category={category} />
        </React.Fragment>
    )
}
export default Main;