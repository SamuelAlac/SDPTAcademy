import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../configs/firebase-config';

const ProtectedRoutes = () => {
    const [user] = useAuthState(auth);

    if(user){
        return <Outlet/>;
    }else{
        //sabihan muna ko pag gagalawin xD - ryu
        //nilagay ko sa home paglogout
        return <Navigate to="/"/>;
    }
}

export default ProtectedRoutes