import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(contextProvider);
    const location = useLocation();
      
    if(loading){
        return <p className='text-7 text-white'> L<span className='animate-spin text-red-600'></span>ading </p>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default ProtectedRoute;