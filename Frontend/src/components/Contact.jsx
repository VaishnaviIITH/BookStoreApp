import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[400px]">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              {/* Name */}
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("name", { required: 'Name is required' })}
                />
                <br />
                {errors.name && <span className='text-sm text-red-900'>{errors.name.message}</span>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("email", { required: 'Email is required' })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-900'>{errors.email.message}</span>}
              </div>

              {/* Message */}
              <div className='mt-4 space-y-2'>
                <span>Message</span>
                <br />
                <textarea
                  placeholder="Type your message"
                  className="w-80 px-3 py-1 rounded-md outline-none"
                  rows="4"
                  {...register("message", { required: 'Message is required' })}
                />
                <br />
                {errors.message && <span className='text-sm text-red-900'>{errors.message.message}</span>}
              </div>

              {/* Button */}
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
