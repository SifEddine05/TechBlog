import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom/dist";

export const useSignup =()=>{
    const {dispatch}=useAuthContext()
    const [error,setError] = useState(null)
    const navigate = useNavigate()
    const signup= async (email,password,name )=>{
        console.log(email,password,name);
        const response = await fetch('https://techblog-nslo.onrender.com/signup' , { method : 'POST' , 
        headers : {"Content-Type" : "application/json" },  
        body : JSON.stringify({name:name,email:email,password:password}) 
        } )
        const json = await response.json()
        if(!response.ok)
        {
            let err = json.error
            setError(err)
        }
        else{
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN' , payload : json})
            navigate('/')
        }
    }

    return{signup ,error}
    
}