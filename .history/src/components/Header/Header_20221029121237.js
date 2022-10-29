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
                {/* <button className='btn btn-secondary m-2'><Link to="/Login">Login</Link></button> */}

                {
                    user.email ? 
                        <button className='btn btn-secondary m-2'><Link to="/Login">Login</Link></button>
                        :
                        <button onClick={logout} className='btn btn-secondary p-2 mt-3 mx-2'>Logout</button>


                }
            </nav>
        </div>
    );
};

export default Header;