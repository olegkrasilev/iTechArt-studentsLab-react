import React from 'react';
import Container from '@mui/material/Container';

import { StyledHeader } from 'src/components/header/style';

export const Header = () => (
  <StyledHeader>
    <Container>
      <nav className="menu">
        <ul className="menu__list reset-list">
          <li className="menu__list-item">
            <a className="menu__list-link" href="/">
              Home
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-link" href="/">
              Users
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-link" href="/">
              Account
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-link" href="/">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  </StyledHeader>
);
