import { useEffect } from 'react';
import { useOutletContext,Navigate, useNavigate } from 'react-router-dom';
import Login from "../pages/Login"
const ProtectedRoute = ({children}) => {
  const {user} = useOutletContext()
  const navigate = useNavigate()

  return user? children: <Login/>
};
export default ProtectedRoute