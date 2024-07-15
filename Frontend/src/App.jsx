import React from 'react'

import Home from './Home/Home'


import{ Navigate, Route, Routes } from "react-router-dom"
import Couses from './courses/Couses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'




function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return(<>
 {/* <Home/>
 <Course/> */}
 <Routes>
  <Route path="/"element={<Home/>}/>
  <Route path="/course"element={authUser?<Couses/>:<Navigate to ="/signup"/>}/>
  <Route path="/signup"element={<Signup/>}/>
  <Route path="/contact"element={<Contact/>}/>
  <Route path="/about"element={<About/>}/>

 </Routes>
 <Toaster/>
  </>)  
     
}

export default App
