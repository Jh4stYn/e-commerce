import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import './styles/purchases.css'

const Purchases = () => {
    const purchases = useSelector(store => store.purchases)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])
    
    console.log(purchases)
    return (
        <div className='purchases'>
            <h2 className='purchases__title'>My purchases</h2>
            <ul className='purchases__list'>
                {
                    purchases.map(item => (
                        <li className='purchases__item' key={item.id}>
                            <figure className='purchases__item__img'>
                                <img src={item.product.images[0].url} alt="product image" />
                            </figure>     
                            <span className='purchases__item__name'>{item.product.title}</span>
                            <div className='purchases__item__date'>{item.createdAt.slice(0, 10)}</div>
                            <div className='purchases__item__quantity'>{item.quantity}</div>
                            <div className='purchases__item__price'>{item.product.price}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Purchases