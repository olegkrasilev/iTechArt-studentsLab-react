import React, { useState } from 'react';

import { Button, TextField } from '@mui/material';

import { Wrapper } from 'src/components/login/style';

export const Login = () => {
  const [isUserForgotPassword, setIsUserForgotPassword] = useState(false);

  const toggleUserForgotPassword = () => {
    setIsUserForgotPassword(!isUserForgotPassword);
  };

  return (
    <Wrapper>
      <div className="form__left" />
      <form className="form__right" noValidate autoComplete="false">
        <div className="wrapper__inner">
          <h1 className="title">
            {isUserForgotPassword ? (
              <span className="title__welcome">
                Welcome back <span>Login to your account</span>
              </span>
            ) : (
              <span className="title__registration">Registration</span>
            )}
          </h1>
          <TextField className="input" type="email" label="email" variant="outlined" required />
          <TextField className="input" type="password" label="password" variant="outlined" required />
          {isUserForgotPassword && (
            <TextField className="input" type="text" label="First Name" variant="outlined" required />
          )}
          {isUserForgotPassword && (
            <TextField className="input" type="text" label="Last Name" variant="outlined" required />
          )}
          <Button className="loginBtn button" variant="contained" color="success" size="large">
            {isUserForgotPassword ? 'Login now' : 'Register'}
          </Button>
          {isUserForgotPassword && (
            <Button className="button" variant="text">
              Forgot password?
            </Button>
          )}
          <Button onClick={toggleUserForgotPassword} className="button" variant="text">
            {isUserForgotPassword ? 'Sign up' : 'Already have an account?'}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};
