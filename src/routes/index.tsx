import React, { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@mui/material';

import { selectIsUserAuthorized } from 'src/redux/selector';
import { Login } from 'src/pages/login/index';
import { NotFound } from 'src/pages/notFound';
import { Layout } from 'src/pages/layout';

const AllUsers = lazy(() => import('src/pages/allUsers'));
const AllPosts = lazy(() => import('src/pages/allPosts/container'));
const Account = lazy(() => import('src/pages/account/container'));
const Post = lazy(() => import('src/pages/post'));

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
      navigate('/authorized/allPosts/1');
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
            <Route path="allUsers/:page" element={<AllUsers />} />
            <Route path="allPosts/:page" element={<AllPosts />} />
            <Route path="account/:page" element={<Account />} />
            <Route path="allPosts/post/:postID" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
