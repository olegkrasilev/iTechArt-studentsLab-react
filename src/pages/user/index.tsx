import React from 'react';

import { StyledCard } from './style';

import profile from 'src/pages/user/assets/profilePicture.png';

type Properties = {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  email: string | null | undefined;
};

const UserPage: React.FC<Properties> = ({ firstName, email, lastName }) => (
  <StyledCard>
    <img src={profile} alt="" className="avatar" />
    <h3 className="title">
      {firstName} {lastName}
    </h3>
    <h3 className="email">{email}</h3>
  </StyledCard>
);

export default UserPage;
