import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterPrice.css'

const FilterPrice = ({setInputPrice}) => {
    const {handleSubmit, register} = useForm()

    const submit = (data) => {
        setInputPrice({
            from: data.from,
            to: data.to || Infinity
        })
    }

    return (
        <div className='filterprice'>
            <h3 className='filterprice__title'>Price</h3>
            <form className='filterprice__form' onSubmit={handleSubmit(submit)}>
                <div className='filterprice__item'>
                    <label htmlFor="from">From</label>
                    <input {...register('from')} id='from' type="text" />
                </div>
                <div className='filterprice__item'>
                    <label htmlFor="to">To</label>
                    <input {...register('to')} id='to' type="text" />
                </div>
                <button>Search</button>
            </form>
        </div>
        
    )
}

export default FilterPrice