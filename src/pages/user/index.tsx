import React from 'react';

import { StyledCard } from './style';

import profile from 'src/pages/user/assets/profilePicture.png';

export const UserPage = () => (
  <StyledCard>
    <img src={profile} alt="" className="avatar" />
    <h3 className="title">Joeylene Rivera</h3>
    <h3 className="email">email@gmail.com</h3>
  </StyledCard>
);
