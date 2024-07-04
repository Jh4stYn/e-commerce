import React, { useState } from 'react'
import './styles/prodDetail.css'
import { useDispatch } from 'react-redux'
import { postProductsThunk, updateProductsThunk } from '../../store/slices/cart.slice'

const prodDetail = ({product}) => {
    const dispatch = useDispatch()
    const [quant, setQuant] = useState(1)

    const handleLess = () => {
        if (product.quantity > 1) {
            dispatch(updateProductsThunk(product.id, {
                quantity: quant - 1
            }))
        }
        if (quant > 1) {
            setQuant(quant - 1)
        }
    }

    const handlePlus = () => {
        dispatch(updateProductsThunk(product.id, { 
            quantity: quant + 1 
        }))
        setQuant(quant + 1)
    }

    const handleAddCart = () => {
        dispatch(postProductsThunk({
            quantity: quant,
            productId: product.id,
        }))
        console.log('Product added to cart')
    }

    return (
        <section className='proddetail'>
            <h3 className='proddetail__brand'>{product?.brand}</h3>
            <h2 className='proddetail__title'>{product?.title}</h2>
            <div className='proddetail__content'>
                <p className='proddetail__description'>{product?.description}</p>
                <div className='proddetail__data'>
                    <div className='proddetail__price'>
                        <span className='price'>Price</span>
                        <span>$ {product?.price}</span>
                    </div>
                    <div className='proddetail__quantity'>
                        <span className='quantity'>Quantity</span>
                        <div className='proddetail__quantity-btns'>
                            <button onClick={handleLess}>-</button>
                            <span>{quant}</span>
                            <button onClick={handlePlus}>+</button>
                        </div>        
                    </div>
                </div>
                <button className='proddetail__button' onClick={handleAddCart}>Add to cart</button>
            </div>
        </section>
    )
}

export default prodDetail