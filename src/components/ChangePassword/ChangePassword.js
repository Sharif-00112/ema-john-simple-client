import React from 'react';
import useAuth from '../../hooks/useAuth';

const ChangePassword = () => {
    const {error, handleChangePassword, handlePasswordChange} = useAuth();

    return (
        <div>
            <h3 className='pt-5'>Change Password</h3> 
            <hr className='w-25 mx-auto'/>

            <form className='w-75 mx-auto' onSubmit={handleChangePassword}>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">New Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder='Enter your password' required/>
                    </div>

                    <br />
                    <p className='text-danger'>{error}</p>
                </div>
                <button type="submit" className="btn btn-secondary mb-3">Submit</button>
            </form>
        </div>
    );
};

export default ChangePassword;