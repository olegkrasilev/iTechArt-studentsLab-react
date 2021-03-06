/* eslint-disable sonarjs/cognitive-complexity */
import React from 'react';
import { useFormik } from 'formik';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { loginSchemaValidation, signUpSchemaValidation } from './validation';
import { Wrapper } from './style';
import { ForgotPasswordModal } from './forgoPasswordModal';

import { loginAction, signupAction } from 'src/redux/action/user';

type Properties = {
  isUserRegistered: boolean;
  userError: boolean;
  isForgotUserPasswordModalOpen: boolean;
  toggleUserForgotPassword: () => void;
  openIsUserForgotPasswordModal: () => void;
  closeIsUserForgotPasswordModal: () => void;
};

const Login: React.FC<Properties> = ({
  isUserRegistered,
  userError,
  isForgotUserPasswordModalOpen,
  closeIsUserForgotPasswordModal,
  openIsUserForgotPasswordModal,
  toggleUserForgotPassword,
}) => {
  const dispatch = useDispatch();
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchemaValidation,
    onSubmit: data => {
      dispatch(loginAction(data));
    },
  });

  const signUpFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: signUpSchemaValidation,
    onSubmit: data => {
      dispatch(signupAction(data));
    },
  });

  return (
    <>
      <Wrapper>
        <div className="form__left" />
        <form
          onSubmit={isUserRegistered ? signUpFormik.handleSubmit : loginFormik.handleSubmit}
          className="form__right"
          noValidate
          autoComplete="off"
        >
          <div className="wrapper__inner">
            <h1 className="title">
              {isUserRegistered ? (
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
              value={isUserRegistered ? signUpFormik.values.email : loginFormik.values.email}
              onChange={isUserRegistered ? signUpFormik.handleChange : loginFormik.handleChange}
              error={
                isUserRegistered
                  ? signUpFormik.touched.email && Boolean(signUpFormik.errors.email)
                  : loginFormik.touched.email && Boolean(loginFormik.errors.email)
              }
              helperText={
                isUserRegistered
                  ? signUpFormik.touched.email && signUpFormik.errors.email
                  : loginFormik.touched.email && loginFormik.errors.email
              }
              variant="outlined"
              required
            />
            <TextField
              className="input"
              id="password"
              name="password"
              type="password"
              label="password"
              value={isUserRegistered ? signUpFormik.values.password : loginFormik.values.password}
              onChange={isUserRegistered ? signUpFormik.handleChange : loginFormik.handleChange}
              error={
                isUserRegistered
                  ? signUpFormik.touched.password && Boolean(signUpFormik.errors.password)
                  : loginFormik.touched.password && Boolean(loginFormik.errors.password)
              }
              helperText={
                isUserRegistered
                  ? signUpFormik.touched.password && signUpFormik.errors.password
                  : loginFormik.touched.password && loginFormik.errors.password
              }
              variant="outlined"
              required
            />
            {isUserRegistered && (
              <TextField
                className="input"
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                value={signUpFormik.values.firstName}
                onChange={signUpFormik.handleChange}
                error={signUpFormik.touched.firstName && Boolean(signUpFormik.errors.firstName)}
                helperText={signUpFormik.touched.firstName && signUpFormik.errors.firstName}
                variant="outlined"
                required
              />
            )}
            {isUserRegistered && (
              <TextField
                className="input"
                id="lastName"
                name="lastName"
                type="text"
                label="Last Name"
                value={signUpFormik.values.lastName}
                onChange={signUpFormik.handleChange}
                error={signUpFormik.touched.lastName && Boolean(signUpFormik.errors.lastName)}
                helperText={signUpFormik.touched.lastName && signUpFormik.errors.lastName}
                variant="outlined"
                required
              />
            )}
            <Button className="loginBtn button" type="submit" variant="contained" color="success" size="large">
              {isUserRegistered ? 'Register' : 'Login'}
            </Button>
            {isUserRegistered ? (
              ''
            ) : (
              <Button onClick={openIsUserForgotPasswordModal} className="button" variant="text">
                Forgot password?
              </Button>
            )}
            <Button onClick={toggleUserForgotPassword} className="button" variant="text">
              {isUserRegistered ? 'Already have an account?' : 'Sign up'}
            </Button>
          </div>
        </form>
      </Wrapper>
      <ForgotPasswordModal
        closeIsUserForgotPasswordModal={closeIsUserForgotPasswordModal}
        isForgotUserPasswordPasswordModalOpen={isForgotUserPasswordModalOpen}
      />
      {userError && (
        <Snackbar open={userError} autoHideDuration={6000}>
          <Alert severity="warning" sx={{ fontSize: 16 }}>
            This is an error. Please try again.
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Login;
