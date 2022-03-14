import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import Login from './login';

import { selectUserError } from 'src/redux/selector';

const LoginContainer: React.FC = () => {
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [isForgotUserPasswordModalOpen, setForgotUserPasswordModalOpen] = React.useState(false);

  const userError = useSelector(selectUserError) ?? false;

  const toggleUserForgotPassword = useCallback(() => {
    setIsUserRegistered(!isUserRegistered);
  }, [isUserRegistered]);

  const openIsUserForgotPasswordModal = useCallback(() => {
    setForgotUserPasswordModalOpen(true);
  }, []);

  const closeIsUserForgotPasswordModal = useCallback(() => {
    setForgotUserPasswordModalOpen(false);
  }, []);

  return (
    <Login
      isUserRegistered={isUserRegistered}
      userError={userError}
      isForgotUserPasswordModalOpen={isForgotUserPasswordModalOpen}
      closeIsUserForgotPasswordModal={closeIsUserForgotPasswordModal}
      openIsUserForgotPasswordModal={openIsUserForgotPasswordModal}
      toggleUserForgotPassword={toggleUserForgotPassword}
    />
  );
};

export default LoginContainer;
