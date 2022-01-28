import React from 'react';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';

import { StyledHeader } from 'src/components/header/style';

export const Header: React.FC = () => (
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
            <button className="menu__list-link reset-btn" type="button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </Container>
  </StyledHeader>
);
