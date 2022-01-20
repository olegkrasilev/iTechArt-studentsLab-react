import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

import { Wrapper } from 'src/components/login/style';
import { ForgotPasswordModal } from 'src/components/login/forgoPasswordModal';

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

  return (
    <>
      <Wrapper>
        <div className="form__left" />
        <form className="form__right" noValidate autoComplete="false">
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
            <TextField className="input" type="email" label="email" variant="outlined" required />
            <TextField className="input" type="password" label="password" variant="outlined" required />
            {isUserLoggedIn && (
              <TextField className="input" type="text" label="First Name" variant="outlined" required />
            )}
            {isUserLoggedIn && (
              <TextField className="input" type="text" label="Last Name" variant="outlined" required />
            )}
            <Button className="loginBtn button" variant="contained" color="success" size="large">
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
