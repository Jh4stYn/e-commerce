import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__title'>
                <h1><Link to={'/'}>E-commerce</Link></h1>
            </div>
            <div className='navbar__list'>
                <Link to={'/login'}>
                    <button className='navbar__item'>
                        <box-icon name='user'></box-icon>
                    </button>
                </Link>
                <Link to={'/purchases'}>
                    <button className='navbar__item'>
                        <box-icon name='box' ></box-icon>
                    </button>
                </Link>
                <Link to={'/cart'}>
                    <button className='navbar__item'>
                    <box-icon name='cart' ></box-icon>
                    </button>
                </Link>
            </div>    
        </div>
    )
}

export default NavBar