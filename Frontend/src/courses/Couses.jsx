import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Foot from '../components/Foot'

 function Couses () {
    

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Course/>
    </div>
    
    <Foot/>

    </>
   
  )
}
export default Couses;