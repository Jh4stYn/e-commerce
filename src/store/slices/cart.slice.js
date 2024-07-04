import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1'

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (_state, action) => action.payload,
        addToCart: (state, action) => [...state, action.payload],
        removeFromCart: (state, action) => state.filter(item => item.id!== action.payload),
        // updateQuantity: (state, action) => state.map(item => item.id === action.payload.id? {...item, quantity: action.payload.quantity} : item)
        updateQuantity: (state, action) => {
            const {id, quantity} = action.payload
            return state.map(item => item.id === id? 
                {...item, quantity} : item)
        }    
    }
})

export const { setCart, addToCart, removeFromCart, updateQuantity } = cart.actions

export default cart.reducer;  

export const getCartProdsThunk = () => (dispatch) => {
    const url = `${urlBase}/cart`
    axios.get(url, bearerToken())
        .then(res => {
            dispatch(setCart(res.data))
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

export const postProductsThunk = (data) => (dispatch) => {
    const url = `${urlBase}/cart`
    axios.post(url, data, bearerToken())
        .then(res => {
            dispatch(addToCart(res.data))
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

export const deleteProductsThunk = (id) => (dispatch) => {
    const url = `${urlBase}/cart/${id}`
    axios.delete(url, bearerToken())
        .then(() => {
            dispatch(removeFromCart(id))
            console.log('Delete Successfully')
        })
        .catch(err => console.log(err))
}

export const updateProductsThunk = (id, data) => (dispatch) => {
    const url = `${urlBase}/cart/${id}`
    axios.put(url, data, bearerToken())
        .then(res => {
            dispatch(updateQuantity(res.data))
            console.log(res.data)
        })
        .catch(err => console.log(err))
}