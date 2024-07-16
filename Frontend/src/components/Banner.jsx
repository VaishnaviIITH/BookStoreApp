import React from 'react'
import banner  from "../../public/Banner.jpg.png"
function Banner() {
  return <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
    <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
    <div className="space-y-12">
    <h1 className="text-2xl font-bold">
    Books that Enlighten, Books that Entertain!!! <span className='text-pink-800'>Explore Books curated just for you only at BookStore</span></h1>
    <p className="text-xl ">
    Discover a world of knowledge and wonder with our handpicked selection of books. Whether you seek enlightenment or entertainment, our diverse collection has something for every reader. Dive into captivating stories, explore new ideas, and find your next favorite read. Start your journey with us at BookStore today!
        </p>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
  </label>
    </div>
    <button className="btn mt-9 btn-active btn-accent">Get Started</button>

</div>
    <div className=" order-1 w-full md:w-1/2"> <img src={banner} className="w-90 h-55 py-20 px-10"alt="" /></div>
  </div>
  </>
}

export default Banner
