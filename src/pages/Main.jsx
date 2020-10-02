import React, { useCallback, useEffect } from 'react';
import Header from '../components/Header';
import SortPizza from '../components/SortPizza';
import Filter from '../components/Filter';
import Gallery from '../components/Gallery';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filtersActions';
import { fetchPizzas } from '../redux/actions/pizzasActions';
const Main = () => {

    const dispatch = useDispatch();
    const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    return (
        <React.Fragment>
            <Header />
            <div className='sort-container'>
                <SortPizza onClickCategory={onSelectCategory} activeCategory={category} categoryNames={categoryNames} />
                <Filter />
            </div>
            <Gallery />
        </React.Fragment>
    )
}
export default Main;