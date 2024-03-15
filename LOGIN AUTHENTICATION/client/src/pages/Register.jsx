import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import "./Style.css"

export const Register = () => {
    const navigate = useNavigate
    const [data, setData]= useState({
        name: '',
        email: '',
        password: '',
    })
    const registerUser = async (e)=>{
        e.preventDefault(); // this to prevent the reloading process
        const {name,email,password} = data;
        try{
            const {data} = await axios.post('/register', {name,email,password})
        
        if(data.error){
            toast.error(data.error)
            console.log(error)
        }
        else{
            setData({
            name: '',
            email: '',
            password: '',
        }) // to empty the fields
            toast.success('Register success')
            navigate('/login')
        }
    }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className="container">
  
  <div className="registration form">
    <header>Register</header>
    <form onSubmit={registerUser}>
      <input type="text" placeholder="Enter your name" value={data.name} onChange = {(e)=>{setData({...data, name: e.target.value})}} />
      <input type="text" placeholder="Enter your email" value={data.email} onChange = {(e)=>{setData({...data, email: e.target.value})}} />
      <input type="password" placeholder="Create a password" value = {data.password} onChange = {(e)=>{setData({...data, password: e.target.value})}} />
      
      <button type='submit'className="button" >SUBMIT</button>
    </form>
    <div className="signup">
      <span className="signup">
        Already have an account?
        
        <Link to="/login" className="login-link">
                  Login
                </Link>
      </span>
    </div>
  </div>
 </div>

    
  )
}
