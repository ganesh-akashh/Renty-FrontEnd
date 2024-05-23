import { userDetails } from '@/reducers/user'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const user = useSelector(userDetails);
   if(user.id.length===0){
        return <Navigate to="/" />
   }
   return children;
}

export default ProtectedRoutes