import { useNavigate } from "react-router-dom/dist";
import { AuthContext } from "../context/AuthContext";
import { useAuthContext } from "./useAuthContext";

export const useLogout =()=>{
	const {dispatch} =  useAuthContext()
	const navigate = useNavigate()
	const logout =()=>{
		localStorage.removeItem('user')
		dispatch({type : 'LOGOUT'})
        navigate('/login')
	}
	return {logout}

}
