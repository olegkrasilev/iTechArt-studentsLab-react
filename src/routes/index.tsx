import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AllPosts } from 'src/pages/allPosts/allPosts';
import { Login } from 'src/components/login/index';
import { AllUsers } from 'src/pages/allUsers/allUsers';
import { NotFound } from 'src/pages/notFound';
import { Layout } from 'src/pages/layout';
import { UserPage } from 'src/pages/user';
import { selectIsUserAuthorized } from 'src/redux/selector';

export const Navigation = () => {
  const isAuthorized = useSelector(selectIsUserAuthorized);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthorizedLocation = location.pathname.startsWith('/authorized');

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/');
    }

    if (isAuthorizedLocation) {
      return;
    }

    if (isAuthorized) {
      navigate('/authorized/allPosts');
    }
  }, [isAuthorized, isAuthorizedLocation, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {isAuthorized && (
        <Route path="/authorized" element={<Layout />}>
          <Route path="allUsers" element={<AllUsers />} />
          <Route path="allPosts" element={<AllPosts />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      )}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
