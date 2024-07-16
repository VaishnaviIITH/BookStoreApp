import React, { useState, useEffect } from 'react';
import Carddd from './Carddd';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We are delighted to have you
            <span className='text-pink-500'> Here! :)</span>
          </h1>
          <p className='mt-12'>
         Embark on a journey of knowledge and discovery with our curated courses. Whether you're a curious beginner or an avid learner, our selection will ignite your passion and guide you towards mastery.
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-red-950 duration-200'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => (
              <Carddd key={item._id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
