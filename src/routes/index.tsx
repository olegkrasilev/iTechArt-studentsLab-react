import React, { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@mui/material';

import { selectIsUserAuthorized, selectUserId, selectRequestedUserInfo } from 'src/redux/selector';
import Login from 'src/pages/login/container';
import { NotFound } from 'src/pages/notFound';
import { Layout } from 'src/pages/layout';

const AllUsers = lazy(() => import('src/pages/allUsers/container'));
const AllPosts = lazy(() => import('src/pages/allPosts/container'));
const Account = lazy(() => import('src/pages/account/container'));
const Post = lazy(() => import('src/pages/post'));
const CreatePost = lazy(() => import('src/pages/createPost'));

export const Navigation = () => {
  const isAuthorized = useSelector(selectIsUserAuthorized);
  const userId = useSelector(selectUserId);
  const requestedUserId = useSelector(selectRequestedUserInfo);
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
            <Route path="account/:page" element={<Account userId={userId} />} />
            <Route path="requestedUser/:page" element={<Account userId={requestedUserId} />} />
            <Route path="allPosts/post/:postID" element={<Post />} />
            <Route path="createPost" element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
