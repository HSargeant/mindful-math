import { useOutletContext,useNavigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
  const {user} = useOutletContext()
  const navigate = useNavigate()

  return user? children: navigate("/login")
};
export default ProtectedRoute