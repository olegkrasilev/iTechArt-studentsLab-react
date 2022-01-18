import React from 'react';

import { Button, TextField } from '@mui/material';

import { Wrapper, FormLeft, FormRight } from 'src/components/login/style';

export const Login = () => (
  <Wrapper>
    <FormLeft />
    <FormRight action="">
      <div className="wrapper__inner">
        <h1 className="title">
          <span>Welcome back</span> Login to your account
        </h1>
        <TextField className="input" type="email" id="outlined-basic" label="email" variant="outlined" />
        <TextField className="input" type="password" id="outlined-basic" label="password" variant="outlined" />
        <Button className="loginBtn button" variant="contained" color="success" size="large">
          Login now
        </Button>
        <Button className="button" variant="text">
          Forgot password?
        </Button>
        <Button className="button" variant="text">
          Sign up
        </Button>
      </div>
    </FormRight>
  </Wrapper>
);
