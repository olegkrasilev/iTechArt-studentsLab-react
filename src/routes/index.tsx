import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AllPosts } from 'src/pages/allPosts/allPosts';
import { Login } from 'src/components/login/index';
import { mockData as PostData } from 'src/data/post';
import { mockData as UserData } from 'src/data/users';
import { AllUsers } from 'src/pages/allUsers/allUsers';
import { NotFound } from 'src/pages/notFound';
import { Layout } from 'src/pages/layout';
import { UserPage } from 'src/pages/user';
import { selectIsUserAuthorized } from 'src/redux/selector';

export const Navigation = () => {
  const isAuthorized = useSelector(selectIsUserAuthorized);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate('/authorized/allUsers');
    }
  }, [isAuthorized, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {isAuthorized && (
        <Route path="/authorized" element={<Layout />}>
          <Route path="allUsers" element={<AllUsers currentData={UserData} />} />
          <Route path="allPosts" element={<AllPosts currentData={PostData} />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      )}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
