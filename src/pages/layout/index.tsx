import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';

export const Layout = () => (
  <>
    <Header />
    <main>
      <section>
        <Outlet />
      </section>
    </main>
    <Footer />
  </>
);
