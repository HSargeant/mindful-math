import { useNavigate,useOutletContext,Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
  const navigate=useNavigate()
  const {user} = useOutletContext()
  // console.log(user)
  return user ? children : navigate("/login")
};
export default ProtectedRoute