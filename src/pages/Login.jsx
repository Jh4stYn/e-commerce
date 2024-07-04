import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './styles/login.css'

const Login = () => {
    const [token, setToken] = useState()
    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    const submit = async (data) => {
        console.log(data)
        await useAuth('/users/login', data)
        reset({
            email: '',
            password: ''
        })
        setToken(localStorage.getItem('token'))
    }   

    const handleLogout = () => {
        localStorage.removeItem('token')
        setToken()
    }
    
    return (
        <div className='login'>
        {
            token ? 
                <button onClick={handleLogout}>Logout</button>
                :
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input {...register('email')} type="text" id="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input {...register('password')} type="text"  id="password" />
                        </div>
                        <button>Submit</button>
                    </form>
                    <p>If you are not register yet, <Link to={'/register'}>register here</Link> </p>
                </div>
        }
        </div>
        
    )
}

export default Login