import React from 'react';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

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
              <Link className="menu__list-link" to="/authorized/allUsers">
                Users
              </Link>
            </li>
            <li className="menu__list-item">
              <NavLink
                className={({ isActive }) => `menu__list-link${isActive ? '--active' : ''}`}
                // className="menu__list-link"
                to="/authorized/allPosts"
              >
                Posts
              </NavLink>
            </li>
            <li className="menu__list-item">
              <Link className="menu__list-link" to="/authorized/account">
                Account
              </Link>
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
