import React from 'react';

import { AllPosts } from 'src/pages/allPosts/allPosts';

import { Login } from 'src/components/login/index';
import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import './styles/fonts.css';
import { mockData as PostData } from 'src/data/post';
import { mockData as UserData } from 'src/data/users';
import { AllUsers } from 'src/pages/allUsers/allUsers';

export const App: React.FC = () => (
  <>
    <Login />;
    <Header />
    <Footer />
    <AllPosts currentData={PostData} />
    <AllUsers currentData={UserData} />
  </>
);
