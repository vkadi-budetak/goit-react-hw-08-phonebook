import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redax/authReducerThunk';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
    dispatch(registerThunk(data));
    reset();
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        required
        fullWidth
        name="email"
        label="Email"
        type="email"
        id="email"
        autoComplete="current-email"
        {...register('email', { required: true })}
      />
      {errors.email && <span>This field is required</span>}
      <TextField
        margin="normal"
        required
        fullWidth
        name="name"
        label="Name"
        type="name"
        id="name"
        autoComplete="current-name"
        {...register('name', { required: true })}
      />
      {errors.name && <span>This field is required</span>}
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        {...register('password', { required: true, minLength: 7 })}
      />
      {errors.password && <span>This field is required</span>}

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
    </form>
  );
};

export default RegisterPage;
