import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLogin = data => {
    console.log(data);
  }

  return (

    <div className="lg:w-1/3 mx-auto my-20 p-8 space-y-3 border-4 rounded-xl">

      <h1 className="text-2xl font-bold text-center">Login</h1>

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 ng-untouched ng-pristine ng-valid">

        <div className="space-y-1 text-sm">
          <input type="email" {...register("email", {
            required: 'Please provide an email'
          })}
            className="w-full px-4 py-3 rounded-md "
            placeholder="Email" required />
          {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
        </div>
        <div className="space-y-1 text-sm">
          <input type="password" {...register("password", {
            required: 'Please provide a password',
            minLength: { value: 6, message: "Password must be 6 characters" }
          })}
            className="w-full px-4 py-3 rounded-md " placeholder="Password" required />
          {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
        </div>
        {/* <div>
            {loginError && <p className='text-red-700'>{loginError}</p>}
          </div> */}
        {/* <p>{data}</p> */}
        <input type="submit" value="Login" className="btn btn-primary w-full text-white" />
      </form>

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm ">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>

      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="w-full btn btn-outline btn-primary rounded-sm">
          <FaGoogle></FaGoogle>
        </button>
      </div>

      <p className="text-xs text-center sm:px-6 ">Don't have an account?
        <Link to='/signup' className="underline"> Sign up</Link>
      </p>

    </div>

  );
};

export default Login;