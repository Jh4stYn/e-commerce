import React from 'react'
import './styles/prodCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postProductsThunk } from '../../store/slices/cart.slice'

const ProdCard = ({prod}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDetail = () => {
        navigate(`/product/${prod.id}`)
    }

    const handleAddCart = () => {
        dispatch(postProductsThunk({
            quantity: 1,
            productId: prod.id,
        }))
        console.log('Product added to cart')
    }

    return (
        <article className='prodcard'>
            <div className='prodcard__container'>
                <figure className='prodcard__img' onClick={handleDetail}>
                    <img src={prod.images[0].url} alt="product image" />
                    <img src={prod.images[1].url} alt="product image" />
                </figure>
                <hr className='prodcard__div' />
                <ul className='prodcard__list'>
                    <li className='prodcard__item'><span>{prod.brand}</span><span>{prod.title}</span></li>
                    <li className='prodcard__item'><span>Price</span><span>$ {prod.price}</span></li>
                </ul>
            </div>
            <div className='prodcard__buttons'>
                <button onClick={handleAddCart}><box-icon name='cart-add' type='solid' color='#ffffff' ></box-icon></button>
            </div>
        </article>
    )
}

export default ProdCard