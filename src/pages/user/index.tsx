import React, { useState } from 'react';

import { StyledCard } from './style';

import profile from 'src/pages/user/assets/profilePicture.png';

type Properties = {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  email: string | null | undefined;
};

const UserPage: React.FC<Properties> = ({ firstName, email, lastName }) => {
  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userEmail, setUserEmail] = useState(email);

  // userID, email, lastName, firstName <<<< to server

  return (
    <StyledCard>
      <img src={profile} alt="" className="avatar" />
      <input
        value={userFirstName || ''}
        onChange={event => setUserFirstName(event.target.value)}
        onBlur={() => console.log('dispatch', userFirstName)}
      />
      <input
        value={userLastName || ''}
        onChange={event => setUserLastName(event.target.value)}
        onBlur={() => console.log('dispatch', userLastName)}
      />
      <input
        value={userEmail || ''}
        onChange={event => setUserEmail(event.target.value)}
        onBlur={() => console.log('dispatch', userEmail)}
      />
    </StyledCard>
  );
};

export default UserPage;
