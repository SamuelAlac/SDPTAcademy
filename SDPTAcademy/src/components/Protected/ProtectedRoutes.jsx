import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const user = null;

    if(user){
        return <Outlet/>;
    }else{
        return <Navigate to="/login"/>;
    }
}

export default ProtectedRoutes