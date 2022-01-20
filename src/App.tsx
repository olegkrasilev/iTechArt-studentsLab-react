import React from 'react';

import { AllPosts } from 'src/pages/allPosts/allPosts';

import { Login } from 'src/components/login/index';
import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import './styles/fonts.css';

export const App: React.FC = () => (
  <>
    <Login />;
    <Header />
    <Footer />
    <AllPosts />
  </>
);
