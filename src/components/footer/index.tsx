import React from 'react';
import Container from '@mui/material/Container';

import { StyledFooter } from 'src/components/footer/style';

export const Footer = () => (
  <StyledFooter>
    <Container>
      <nav className="menu">
        <ul className="menu__list reset-list">
          <li className="menu__list-item">
            <a className="menu__list-link" href="/">
              FAQ
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-link" href="/">
              Contact information
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  </StyledFooter>
);
