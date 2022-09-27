import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const CompleteProfile = () => {
    const {error, verifyEmail} = useAuth();

    return (
        <div>
            <h3 className='pt-5'>Complete Profile</h3> 
            <hr className='w-25 mx-auto'/>

            <br />
            <button className='btn btn-secondary p-2 m-3'><Link className='text-decoration-none text-white' to="/changepassword"><u>Change Password</u></Link></button>
            <button className='btn btn-secondary p-2 m-3'><Link className='text-decoration-none text-white' to="/updatename"><u>Update User Name</u></Link></button>
            <button onClick={verifyEmail} className='btn btn-success p-2 m-3'>Verify Email</button>
            <br />
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default CompleteProfile;