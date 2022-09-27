import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

//step-1-context
export const AuthContext = createContext();

const AuthProvider = (props) => {
    //step-3-context
    const {children} = props;

    //step-5-context
    const allContext = useFirebase();

    return (
        //step-2-context
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;