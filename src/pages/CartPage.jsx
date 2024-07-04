import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProdsThunk, setCart } from '../store/slices/cart.slice'
import { postPurchasesThunk } from '../store/slices/purchases.slice'
import ItemCart from '../components/cartPage/ItemCart'
import './styles/cartPage.css'

const CartPages = () => {
    const cart = useSelector(store => store.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartProdsThunk())
    }, [])
    
    const products = cart.reduce(
        (cv, prod) => cv += prod.quantity, 0
    )
    const total = cart.reduce(
        (cv, prod) => cv += prod.quantity * prod.product?.price, 0
    )
    
    const handleBuy = () => {
        dispatch(postPurchasesThunk())
        dispatch(setCart([]))
    }
    console.log(cart)

    return (
        <div className='cartpage'>
            <div className='cartpage__container'>
                {
                    cart.map(prod => (
                        <ItemCart
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
            <div className='cartpage__totals'>
                <ul className='cartpage__list'>
                    <li className='cartpage__item'><span>Products: </span><span>{products}</span></li>
                    <li className='cartpage__item'><span>Total: </span><span>$ {total}</span></li>
                </ul>
                <button className='cartpage__btn' onClick={handleBuy}>Checkout</button>
            </div>
        </div>
        
    )
}

export default CartPages