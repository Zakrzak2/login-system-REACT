import { React, useState } from 'react'
import "../main.css"
import { motion } from "framer-motion"



const LoginForm = () => {


    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    
    function check(){
        if (username == "root") {
            if (password == "admin") {
              console.log("Zalogowano :)");
            } else {
              console.log("Niepoprawne hasło!");
            }
          } else {
            console.log("Nie ma takiego użytkownika.");
          }
    }

    return(
        <>
            <div>
                <div className='flex flex-col items-center justify-center '>

                    <h1 className='text-xl text-indigo-950'>Login Form</h1>
                    
                    <h3 className='text-lg text-indigo-950'>Login</h3>
                    
                    <motion.input                       //LOGIN
                    whileHover={{scale: 1.3}} 
                    whileTap={{scale: 0.8}}
                    className='p-2 text-center bg-indigo-400 border-2 rounded-lg border-indigo-950' type='text' placeholder='username' id="Input_login" value={username} onChange={(event) => {
                        setUsername(event.target.value)
                      }}></motion.input>

                    <h3 className='text-lg text-indigo-950'>Password</h3>
                    
                    <motion.input                   // Hasło
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.8}} 
                    className='p-2 text-center bg-indigo-400 border-2 rounded-lg border-indigo-950' type='password' placeholder='password' id="Input_Password" value={password} onChange={(event) => {
                        setPassword(event.target.value)
                      }}></motion.input>
                    
                </div>

                <div className='flex flex-col items-center justify-center'>
                    
                    <motion.button              // zatwierdzenie logowania
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.8 }} 
                    className='w-20 m-2 bg-indigo-400 border-2 rounded-lg border-indigo-950 hover:bg-indigo-500 active:bg-indigo-50 h-11' onClick={check}>Login</motion.button>
                    
                </div>
            </div>
        </>
    )
}

export default LoginForm