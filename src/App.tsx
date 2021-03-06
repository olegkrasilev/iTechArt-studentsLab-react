import React from 'react';
import { Helmet } from 'react-helmet';

import { Navigation } from 'src/routes';

const App: React.FC = () => (
  <>
    <Helmet>
      <title>iTechArt Students Lab </title>
      <meta name="description" content="pet project" />
    </Helmet>
    <Navigation />
  </>
);

export default App;
