import React, { useEffect } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import User from './user';

import { loadUsersAction } from 'src/redux/action/users';
import { RenderPagination } from 'src/components/pagination';
import { selectALlUsers, selectIsAllUsersLoading } from 'src/redux/selector';

const AllUsers: React.FC = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectALlUsers);
  const isAllUsersLoading = useSelector(selectIsAllUsersLoading);

  useEffect(() => {
    dispatch(loadUsersAction());
  }, [dispatch]);

  const renderUsers = allUsers.map(item => {
    const { email, firstName, lastName, id } = item;

    return <User key={id} email={email} firstName={firstName} lastName={lastName} />;
  });

  if (isAllUsersLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return <RenderPagination incomingData={allUsers} renderData={renderUsers} />;
};

export default AllUsers;
