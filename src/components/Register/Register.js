import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { error, handleRegisterSubmitBtn, handleEmailChange, handlePasswordChange } = useAuth();

    return (
        <div>
            <h3 className='pt-5'>New user Registration</h3> <hr className='w-25 mx-auto'/>

            <form className='w-75 mx-auto' onSubmit={handleRegisterSubmitBtn}>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder='Enter a valid email' required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder='Choose a strong password' required/>
                    </div>
                </div>
                {/* ignoring for now  */}
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder='Re-type password to confirm' required/>
                    <br />
                    <small className='text-info'>Hints: Password should have minimum 8 characters length, 1 letter in Upper Case, 1 letter in Lower Case, 1 Special Character and 1 number.</small>
                    <br />
                    <p className='text-danger'>{error}</p>
                    </div>
                </div>               

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                        <input className="form-check-input mx-auto" type="checkbox" id="gridCheck1" required/>
                        <label className="form-check-label" htmlFor="gridCheck1">
                        Accept terms and conditions*
                        </label>
                    </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary">Register</button>
                </form>

            <br />
            <button className='btn btn-success p-2 m-3'><Link className='text-decoration-none text-white' to="/login"><u>Already registered? Click to Login!</u></Link></button>

        </div>
    );
};

export default Register;