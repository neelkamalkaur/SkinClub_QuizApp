import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CoverHistory() {


    const navigate = useNavigate();

  return (
    <>
     <h1>Cover History</h1>
     <button onClick={()=>{
        navigate('/userallergicinfo');
     }}>Continue</button>

    </>
  )
}
