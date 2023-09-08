import React, { useState } from "react";
import {dermatology_choice} from "./DermatologyChoiceData"
import { useNavigate } from "react-router-dom";
import UserSym from "../UserSymDetails/UserSym";




export default function DermatologyUserChoice() {

  const navigate = useNavigate();

  const [dermatologyDetails, setDermatologyDetails] = useState([]);
  const [dermatologyChoice, setDermatologyChoice] = useState([...dermatology_choice]);
  const [step, setStep] = useState(1);
  const [renderData, setRenderData] = useState(dermatology_choice.slice(0, 1));






  const getSymptumDetails = (e) => {
    
  };


  const handleRenderComponent = async (data) => {
  

   
    await setStep((step)=>{
     return step+1
    });
    if(step>=dermatology_choice.length){
      navigate("/userinputprescription");
    }

    await setRenderData(dermatology_choice.slice(step, step + 1));
    await setDermatologyDetails((prevState) => {
      return [...prevState, data];
    });
    
  };

  

console.log(dermatologyDetails);
 



  return (
    <>
      

      {renderData.map((symptum, index) => {
        return (
          <>
            <UserSym
              question={symptum.question}
              options={symptum.options}
              facet={symptum.facet_tip}
              getSymptumDetails={getSymptumDetails}
              option_type={symptum.option_type}

              input_type={symptum.input_type}
              handleRenderComponent={handleRenderComponent}
            />
          </>
        );
      })}
     
   
      
    </>
  );
}
