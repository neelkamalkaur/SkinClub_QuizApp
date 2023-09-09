import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserPrescriptionContext } from '../../GlobalContext/userInputPrescription';


export default function CoverHistory() {

  const {state} = useUserPrescriptionContext();

  console.log(state.data);


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
