import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  }

  return (

    <div className="lg:w-1/3 mx-auto my-20 p-8 space-y-3 border-4 rounded-xl">

      <h1 className="text-2xl font-bold text-center">Sign up</h1>

      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6 ng-untouched ng-pristine ng-valid">

        <div className="space-y-1 text-sm">
          <input type="text" {...register('name', {
            required: 'Please provide your name'
          })}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md " required />
          {errors.name && <p className='text-red-700'>{errors.name?.message}</p>}
        </div>

        <div className="space-y-1 text-sm">
          <input type="email" {...register('email', {
            required: 'Please provide an email'
          })}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md " required />
          {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
        </div>

        <div className="space-y-1 text-sm">
          <input type="password" {...register('password', {
            required: 'Please provide a password',
            minLength: { value: 6, message: "Password must be 6 characters" }
          })}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md" required />
          {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
        </div>

        <button className="block w-full p-3 text-center rounded-sm text-white bg-primary">Sign up</button>

      </form>

      <p className="text-xs text-center sm:px-6 ">Already have an account?
        <Link to='/login' className="underline"> Log in</Link>
      </p>

    </div>

  );

};

export default Signup;