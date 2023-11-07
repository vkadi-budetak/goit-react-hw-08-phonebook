import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redax/authReducerThunk';

//використовую бібліотеку react hook form
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(registerThunk(data))
    reset()
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <span>Email:</span>
            <input  {...register('email', { required: true })} type='email'/>
            {errors.email && <span>This field is required</span>}
        </label>
        <label>
            <span>Name:</span>
            <input  {...register('name', { required: true })} type='text'/>
            {errors.name && <span>This field is required</span>}
        </label>
        <label>
            <span>Password:</span>
            <input  {...register('password', { required: true, minLength: 7 })} type='password'/>
            {errors.password && <span>This field is required</span>}
        </label>

      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default RegisterPage;
