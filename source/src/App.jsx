import { useState } from 'react'
import "./main.css"
import { motion } from 'framer-motion'
import LoginForm from "./component/loginform.jsx"



export default function App() {



  return (
    <>
      <div className='page'>
        <LoginForm/>
      </div>
    </>
  )
}
