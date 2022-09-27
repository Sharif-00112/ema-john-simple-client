import React from 'react';
import useAuth from '../../hooks/useAuth';

const ForgotPassword = () => {
    const { error, handleEmailChange, handleForgotPassword } = useAuth();

    return (
        <div>
            <h3 className='pt-5'>Password Recovery</h3> 
            <hr className='w-25 mx-auto'/>

            <form className='w-75 mx-auto' onSubmit={handleForgotPassword}>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange}  type="email" className="form-control" id="inputEmail3" placeholder='Enter your email' required/>
                    </div>
                </div>
                <div className="row m-3">
                    <p className='text-danger'>{error}</p>
                </div>
                    <button type="submit" className="btn btn-secondary mb-3">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassword;