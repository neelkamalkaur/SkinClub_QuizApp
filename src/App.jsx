import React from 'react'
import './App.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import ConsultationInfo from './Components/ConsultationInfo/ConsultationInfo'
import UserInputName from './Components/UserDetails/UserInputName'
import UserConserns from './Components/UserConcerns/UserConserns'
import UserConsernsMore from './Components/UserConcernsMore/UserConsernsMore'
import UserInfo from './Components/UserDetails/UserInfo/UserInfo'
import UserSymDetails from "./Components/UserSymDetails/UserSymDetails";
import DermatologyUserChoice from './Components/DermatologyChoice/DermatologyUserChoice';
import UserInputPrescription from './Components/Madication_Prescription/UserInputPrescription';
import CoverHistory from './Components/CoverHistory/CoverHistory';
import UserAllergicInfo from './Components/UserAlergicDetails/UserAllergicInfo';
import HealthDiagonosedInfo from './Components/HealthDiagonosedInfo/HealthDiagonosedInfo';














function App() {
  

  return (
    <>

  
    <BrowserRouter>

    <Routes>
      <Route path='/' element={ <ConsultationInfo/>}/>
      <Route path='/userinputname' element={ <UserInputName/>}/>
      <Route path='/userconcerns' element={ <UserConserns/>}/>
      <Route path='/userconcernsmore' element={ <UserConsernsMore/>}/>
      <Route path='/userinfo' element={ <UserInfo/>}/>
      <Route path="/usersymdetails" element={<UserSymDetails />} />
      <Route path='/dermatologyuser' element={<DermatologyUserChoice/>}/>
      <Route path='/userinputprescription' element={ <UserInputPrescription/> }/>
      <Route path='/coverhistory' element={ <CoverHistory/> }/>
      <Route path='/userallergicinfo' element={ <UserAllergicInfo/> }/>
      <Route path='/healthdiagonosedinfo' element={<HealthDiagonosedInfo/>}/>

    

    </Routes>
    
    </BrowserRouter>
   
     

    </>
  )
}

export default App
