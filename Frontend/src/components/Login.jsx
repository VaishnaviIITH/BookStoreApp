import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const dialogRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" ref={dialogRef}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button
              type="button"
              onClick={closeDialog}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

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
              <button type="submit" className='bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
              <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Sign Up</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
