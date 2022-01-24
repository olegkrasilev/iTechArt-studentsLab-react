/* eslint-disable unicorn/consistent-function-scoping */
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { loginEndpoint } from 'src/API/endpoints';
import { ForgotPasswordModal } from 'src/components/login/forgoPasswordModal';
import { Wrapper } from 'src/components/login/style';

export const Login = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isForgotUserPasswordModalOpen, setForgotUserPasswordModalOpen] = React.useState(false);

  const toggleUserForgotPassword = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };

  const openIsUserForgotPasswordModal = () => {
    setForgotUserPasswordModalOpen(true);
  };

  const closeIsUserForgotPasswordModal = () => {
    setForgotUserPasswordModalOpen(false);
  };

  const userSchemaValidation = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
  });

  type LoginResponse = {
    status: string;
    accessToken: string;
    refreshToken: string;
  };

  const login = async (url: string, data: { email: string; password: string }) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const serverResponse: LoginResponse = await response.json();
      const { accessToken, refreshToken } = serverResponse;

      return serverResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userSchemaValidation,
    onSubmit: data => {
      console.log(data);
      login(loginEndpoint, data);
    },
  });

  return (
    <>
      <Wrapper>
        <div className="form__left" />
        <form onSubmit={formik.handleSubmit} className="form__right" noValidate autoComplete="off">
          <div className="wrapper__inner">
            <h1 className="title">
              {isUserLoggedIn ? (
                <span className="title__registration">Registration</span>
              ) : (
                <span className="title__welcome">
                  Welcome back <span>Login to your account</span>
                </span>
              )}
            </h1>
            <TextField
              className="input"
              id="email"
              name="email"
              label="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="outlined"
              required
            />
            <TextField
              className="input"
              id="password"
              name="password"
              type="password"
              label="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              variant="outlined"
              required
            />
            {isUserLoggedIn && (
              <TextField className="input" type="text" label="First Name" variant="outlined" required />
            )}
            {isUserLoggedIn && (
              <TextField className="input" type="text" label="Last Name" variant="outlined" required />
            )}
            <Button className="loginBtn button" type="submit" variant="contained" color="success" size="large">
              {isUserLoggedIn ? 'Register' : 'Login'}
            </Button>
            {isUserLoggedIn ? (
              ''
            ) : (
              <Button onClick={openIsUserForgotPasswordModal} className="button" variant="text">
                Forgot password?
              </Button>
            )}
            <Button onClick={toggleUserForgotPassword} className="button" variant="text">
              {isUserLoggedIn ? 'Already have an account?' : 'Sign up'}
            </Button>
          </div>
        </form>
      </Wrapper>
      <ForgotPasswordModal
        closeIsUserForgotPasswordModal={closeIsUserForgotPasswordModal}
        isForgotUserPasswordPasswordModalOpen={isForgotUserPasswordModalOpen}
      />
    </>
  );
};
