import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";



const RequireAuth = ({children}) => {
    const {user} = useAuthContext()
    
    if(!user){
        return (<Navigate to='/login' />)
    }
   
        return ( <div>{children}</div> );
   
}
 
export default RequireAuth;