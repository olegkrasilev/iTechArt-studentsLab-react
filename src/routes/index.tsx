import React, { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@mui/material';

import { selectIsUserAuthorized } from 'src/redux/selector';
import { Login } from 'src/components/login/index';
import { NotFound } from 'src/pages/notFound';
import { Layout } from 'src/pages/layout';

const AllUsers = lazy(() => import('src/pages/allUsers'));
const AllPosts = lazy(() => import('src/pages/allPosts'));
const Account = lazy(() => import('src/pages/account'));

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
    <Suspense
      fallback={
        <Backdrop open>
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    >
      <Routes>
        <Route path="/" element={<Login />} />
        {isAuthorized && (
          <Route path="/authorized" element={<Layout />}>
            <Route path="allUsers" element={<AllUsers />} />
            <Route path="allPosts" element={<AllPosts />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
