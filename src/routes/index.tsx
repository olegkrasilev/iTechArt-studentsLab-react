import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AllPosts } from 'src/pages/allPosts/allPosts';
import { Login } from 'src/components/login/index';
import { mockData as PostData } from 'src/data/post';
import { mockData as UserData } from 'src/data/users';
import { AllUsers } from 'src/pages/allUsers/allUsers';
import { NotFound } from 'src/pages/notFound';
import { Layout } from 'src/pages/layout';
import { UserPage } from 'src/pages/user';

export const Navigation = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/authorized" element={<Layout />}>
      <Route path="allUsers" element={<AllUsers currentData={UserData} />} />
      <Route path="allPosts" element={<AllPosts currentData={PostData} />} />
      <Route path="user" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
