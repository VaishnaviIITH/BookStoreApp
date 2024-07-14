import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="relative">
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        <div className="w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="font-bold text-3xl text-center text-pink-600 mb-4">About Us</h3>
          <p className='text-gray-700 text-lg mb-4'>
            Welcome to our bookstore! We are passionate about providing a wide variety of books to cater to all readers. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, our store has something for everyone.
          </p>
          <p className='text-gray-700 text-lg mb-4'>
            Our mission is to promote reading and make books accessible to everyone. We believe in the power of stories to inspire, educate, and entertain. That's why we carefully curate our collection to include books from diverse genres and authors.
          </p>
          <p className='text-gray-700 text-lg mb-4'>
            At our bookstore, we host regular events such as book signings, reading sessions, and literary discussions to foster a community of book lovers. Join us and share your love for books with others.
          </p>
          <p className='text-gray-700 text-lg mb-4'>
            We hope you enjoy your time browsing through our collection and find the perfect book that resonates with you. Happy reading!
          </p>
          {/* Link inside the About box */}
          <div className="text-right">
            <Link to="/contact" className="text-blue-500 underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
