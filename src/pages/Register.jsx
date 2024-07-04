import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/register.css'

const Register = () => {

    const { handleSubmit, register, reset } = useForm()

    const submit = (data) => {
        console.log(data)
        useAuth('/users', data)
        reset({
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
        })
    }

    return (
        <div className='register'>
            <form className='register__form' onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register('firstName')} type="text" id="firstName" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input {...register('lastName')} type="text" id="lastName" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} type="password" id="password" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input {...register('phone')} type="number" id="phone" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register