import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom/dist";

export const useLogin =()=>{
	const {dispatch} =  useAuthContext()
	const navigate =useNavigate()
	const login = async (email,password,setError)=>{
		const response = await fetch('http://localhost:5000/login', { method : 'POST' , 
        headers : {"Content-Type" : "application/json" },  
        body : JSON.stringify({email:email,password:password}) 
        } ) 
		const json = await response.json()
		if(!response.ok){
			setError(json.error)	
		}
		if(response.ok){ 
			localStorage.setItem('user',JSON.stringify(json))
			dispatch({type:'LOGIN' ,payload : json })
            navigate('/')
		}
    }
    return {login}
}