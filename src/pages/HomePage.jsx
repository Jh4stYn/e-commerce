import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import ProdCard from '../components/homePage/ProdCard'
import './styles/homePage.css'
import FilterPrice from '../components/homePage/FilterPrice'
import FilterSelect from '../components/homePage/FilterSelect'

const HomePage = () => {
    const [menu, setMenu] = useState(false)
    const [categoryValue, setCategoryValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [inputPrice, setInputPrice] = useState({
        from: 0,
        to: Infinity
    })
    const products = useSelector(store => store.products)
    const dispatch = useDispatch()

    // console.log(products)
    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    const textInput = useRef()
    const handleChange = () => {
        setInputValue(textInput.current.value.trim().toLowerCase())
    }

    const cbFilter = (prod) => {
        const name = prod.title.toLowerCase().includes(inputValue)
        const price = +prod.price >= +inputPrice.from && +prod.price <= +inputPrice.to
        const category = categoryValue === '' ? true : prod.categoryId === +categoryValue
        return name && price && category
    }

    const handleMenu = () => {
        setMenu(!menu)
    }
    
    return (
        <div className='homepage'>
            <div className={`homepage__filters ${menu && 'active'}`}>
                <button onClick={handleMenu}><box-icon name='x'></box-icon></button>
                <FilterPrice
                    setInputPrice={setInputPrice}
                />
                <FilterSelect
                    setCategoryValue={setCategoryValue}
                />
            </div>
            <div className='homepage__search'>
                    <input ref={textInput} onChange={handleChange} type='text'/>
                    <button>🔍</button>
            </div>
            <button className={menu && 'active'} onClick={handleMenu}>Menu</button>
            <div className='homepage__container'>
                {
                    products?.filter(cbFilter).map(prod => (
                        <ProdCard
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage

