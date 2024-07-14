import React from 'react'
import Carddd from './Carddd'
import Llist from "../../public/Llist.json"
import {Link} from "react-router-dom"
function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
<div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl  md:text-4xl'>We are delighted to have to
        <span className='text-pink-500'> Here!:)</span> </h1>
        <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque unde illo sed distinctio incidunt ullam repellendus deleniti suscipit. Dolores saepe autem, ipsum quas nam voluptates repudiandae cupiditate eligendi fugiat deleniti!</p>
<Link to="/">
<button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-red-950 duration-200'>Back</button></Link>
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
      Llist.map((item)=>(
        <Carddd key={item.id} item = {item}/>
      ))  
    }
</div>
   </div>
   </>
  )
}

export default Course
