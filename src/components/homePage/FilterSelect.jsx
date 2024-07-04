import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/filterSelect.css'

const FilterSelect = ({setCategoryValue}) => {
    const [categories, getCategories] = useFetch()

    useEffect(() => {
        getCategories('/categories')
    }, [])

    const itemSelect = useRef()
    const changeSelect = () => {
        setCategoryValue(itemSelect.current.value)
    }

    return (
        <select className='filterselect' ref={itemSelect} onChange={changeSelect}>
            <option value="">All products</option>
            {
                categories?.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))
            }
        </select>
    )
}

export default FilterSelect