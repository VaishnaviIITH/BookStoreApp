import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Foot from '../components/Foot'
import list from "../../public/list.json"
import Llist from "../../public/Llist.json"
 function Couses () {
    console.log(list);
    console.log(Llist);

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