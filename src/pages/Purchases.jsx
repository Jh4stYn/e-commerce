import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'

const Purchases = () => {
    const purchases = useSelector(store => store.purchases)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])
    
    console.log(purchases)
    return (
        <div>

        </div>
    )
}

export default Purchases