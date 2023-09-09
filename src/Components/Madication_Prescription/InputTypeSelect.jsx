import React, { useState } from "react";

const InputTypeSelect = ({  question , helperText ,handleRenderComponent }) => {

    
    const [value, setValue] = useState({
      ques :"",
      ans :"",
    });

    const handleInputChange =(event)=>{


        setValue((prevState)=>({
          ...prevState,

          ques: question,
            ans : event.target.value,
        }));
    }


  return (
    <>
 
      <div>
        <div>
          <h3>
         {question}
          </h3> 
          <p>{helperText}</p>
        </div>
        <div> 
           <select name="using_prescription_or_over_the_contery_medications" onChange={handleInputChange}  >
            <option value={""}>select</option>
            <option value={"val1"}>val1</option>
            <option value={"val2"}>val2</option>
            <option value={"val3"}>val3</option>
           </select>
        </div>

        <button onClick={() => handleRenderComponent(value)}>Continue</button>
      </div>
    </>
  );
};

export default InputTypeSelect;