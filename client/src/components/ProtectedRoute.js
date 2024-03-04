import { useOutletContext,useNavigate, Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
  const user = JSON.parse(window.localStorage.getItem("user"))
  // const {user} = useOutletContext()
  const navigate = useNavigate()
  if(user){
    return children
  }
  return <Navigate to="/login" replace={true} />

  // return user ? children: navigate("/login")
  return user ? children : <Navigate to="/login" />
};
export default ProtectedRoute