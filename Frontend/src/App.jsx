import React from 'react'

import Home from './Home/Home'


import{ Route, Routes } from "react-router-dom"
import Couses from './courses/Couses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'





function App() {
  return(<>
 {/* <Home/>
 <Course/> */}
 <Routes>
  <Route path="/"element={<Home/>}/>
  <Route path="/course"element={<Couses/>}/>
  <Route path="/signup"element={<Signup/>}/>
  <Route path="/contact"element={<Contact/>}/>
  <Route path="/about"element={<About/>}/>

 </Routes>
  </>)  
     
}

export default App
