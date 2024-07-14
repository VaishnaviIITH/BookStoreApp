import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[400px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Sign Up</h3>

              {/* Name */}
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Full Name"
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
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("email", { required: 'Email is required' })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-900'>{errors.email.message}</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("password", { required: 'Password is required' })}
                />
                <br />
                {errors.password && <span className='text-sm text-red-900'>{errors.password.message}</span>}
              </div>

              {/* Button */}
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign Up</button>
                <p className='text-xl'>
                  Already have an account? <button type="button" className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
