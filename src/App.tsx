/* eslint-disable react-redux/useSelector-prefer-selectors */
import React from 'react';
import './styles/fonts.css';
import { useSelector } from 'react-redux';

import { Navigation } from 'src/routes';

export const App: React.FC = () => {
  const store = useSelector(appStore => appStore);

  console.log(store);

  return <Navigation />;
};
