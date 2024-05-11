import React from 'react'
import useAuth from "../hooks/useAuth"
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    const { accessToken } = useAuth()
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

                        {accessToken ?
                            (<><li className='nav-item'><NavLink className={'nav-link'} to={'/'}>Home</NavLink></li>
                            <li className='nav-item'><NavLink className={'nav-link'} >Logout</NavLink></li></>):
                            (<><li className='nav-item'><NavLink className={'nav-link'} to={'/auth/login'}>Login</NavLink></li>
                            <li className='nav-item'><NavLink className={'nav-link'} to={'/auth/register'}>Register</NavLink></li></>)

                        }


                        
                    </ul>
                </div>
            </div>

        </nav>
    )
}