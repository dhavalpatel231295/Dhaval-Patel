import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './common.css'
import React, { useState, useEffect } from 'react';
import Login from '../pages/Login';

const Navbar = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        const username = localStorage.getItem('username');
        if (storedLoginStatus) {
          setLoggedIn(true);
          setUsername(username)
        }
      }, []);
    
      const handleLogin = (status,user) => {
        setLoggedIn(status);
        setUsername(user);
      };
    
      const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        setLoggedIn(false);
        setUsername('');
      };
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2 logo" to="/"></NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link"  style={{ color: '#F9AB42', fontWeight: 'bold', margin: '20px'}} to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  style={{ color: '#F9AB42', fontWeight: 'bold', margin: '20px' }} to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  style={{ color: '#F9AB42', fontWeight: 'bold', margin: '20px' }} to="/account">Account</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  style={{ color: '#F9AB42', fontWeight: 'bold', margin: '20px' }} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                    {isLoggedIn ? (
                        <div>
                        <p>Welcome, {username}!</p>
                    <button onClick={handleLogout}>Logout</button>  </div>): (
                    <NavLink to="/login" className="btn btn-outline-dark m-2" style={{ color: '#F9AB42', borderColor: '#F9AB42'}}><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                    )}
                    <NavLink to="/register" className="btn btn-outline-dark m-2" style={{ color: '#F9AB42', borderColor: '#F9AB42'}}><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                    <NavLink to="/cart" className="btn btn-outline-dark m-2" style={{ color: '#F9AB42', borderColor: '#F9AB42'}}><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar