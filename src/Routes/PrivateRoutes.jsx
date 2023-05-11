import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Loader from '../Pages/Shared/Loader/Loader';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <Loader/>
    }

    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoutes;