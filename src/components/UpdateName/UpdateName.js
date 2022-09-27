import React from 'react';
import useAuth from '../../hooks/useAuth';

const UpdateName = () => {
    const {error, setUserName, handleNameChange} = useAuth();

    return (
        <div>
            <h3 className='pt-5'>Update User Name</h3> 
            <hr className='w-25 mx-auto'/>

            <br />

            <form className='w-75 mx-auto' onSubmit={setUserName}>
                <div className="row mb-3">
                    <label for="inputName" className="col-sm-2 col-form-label">New Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder='Enter your full name' required/>
                    </div>

                    <br />
                    <p className='text-danger'>{error}</p>
                </div>
                <button type="submit" className="btn btn-secondary mb-3">Submit</button>
            </form>
        </div>
    );
};

export default UpdateName;