import React from 'react';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { StyledHeader } from 'src/components/header/style';
import { logoutAction } from 'src/redux/action/user';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
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
              <Link className="menu__list-link" to="/authorized/allUsers">
                Users
              </Link>
            </li>
            <li className="menu__list-item">
              <a className="menu__list-link" href="/">
                Account
              </a>
            </li>
            <li className="menu__list-item">
              <button onClick={handleLogout} className="menu__list-link reset-btn" type="button">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};
