import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => { 
    const { user, logout } = useAuth();

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>

                {
                    user.email ? 
                        <button onClick={logout} className='btn btn-secondary m-2'>Logout</button>
                        :
                        <button className='btn btn-secondary m-2'><Link to="/Login">Login</Link></button>
                }
            </nav>
        </div>
    );
};

export default Header;