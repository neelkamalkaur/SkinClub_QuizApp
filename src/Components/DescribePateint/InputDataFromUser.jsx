import React,{useState} from 'react'


export default function InputDataFromUser({question , helperText, handleRenderComponent}) {

    const [inputData , setInputData] =useState({
       
    })

    
    const inputHandler=(event)=>{
        setInputData({
          ...inputData,
            [event.target.name]:event.target.value
        })
    }

    

  return (
    <>
        <div>
                <div>
                    {question}
                </div>
                <p>{helperText}</p>

                <div>
                    
                <label >Height</label>
                <input type="text" name="height" id="height" onChange={inputHandler}  />
                <label>Weight</label>
                <input type="text" name="weight" id="weight" onChange={inputHandler} />
                


                </div>
                <button onClick={()=>{handleRenderComponent(inputData)}}>Next</button>
        </div>
    </>
  )
}
