import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInput = ({ques, setStep, setUserSymptumData}) => {
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    setUserSymptumData((prevState) => {
      if (prevState.length == undefined)
        return [...prevState, { ques, answer: event.target.value }];

      const newAnswer = { ques, answer: event.target.value };
      const questionIndex = prevState.findIndex((item) => item.ques === ques);

      if (questionIndex !== -1) {
        const updatedUserInfo = [...prevState];
        updatedUserInfo[questionIndex].answer = newAnswer.answer;
        return updatedUserInfo;
      } else {
        return [...prevState, newAnswer];
      }
    });
  };

  return (
    <div>
      <div>
        <div>
         
          <h3>{ques}</h3>
        </div>
        <div>
          <textarea onChange={handleInputChange}></textarea>
        </div>

        <button onClick={() => navigate("/dermatologyuser")}>Continue</button>
      </div>
    </div>
  );
};

export default UserInput;
