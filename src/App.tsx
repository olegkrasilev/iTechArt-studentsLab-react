import React from 'react';

import './styles/fonts.css';
import { Login } from 'src/components/login/index';
import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';

export const App: React.FC = () => (
  <>
    <Login />;
    <Header />
    <Footer />
  </>
);
