import React, { useCallback, useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { loadUsersAction } from '../../redux/action/users';
import { selectALlUsers, selectIsAllUsersLoading, selectTotalUsersInDB } from '../../redux/selector';

import AllUsers from './allUsers';

const AllUsersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { page } = useParams();
  const navigate = useNavigate();
  const [defaultPage, setDefaultPage] = useState(1);
  const allUsers = useSelector(selectALlUsers);
  const isAllUsersLoading = useSelector(selectIsAllUsersLoading);
  const totalPostInDB = useSelector(selectTotalUsersInDB) ?? 0;
  const postPerPage = 5;
  const paginationButtonsCount = Math.ceil(totalPostInDB / postPerPage);

  useEffect(() => {
    dispatch(loadUsersAction(page));
  }, [dispatch, page]);

  const handlePaginationClick = useCallback(
    (event: React.ChangeEvent<unknown>, paginationPage: number) => {
      navigate(`../allUsers/${paginationPage}`, { replace: true });
      setDefaultPage(paginationPage);
    },
    [navigate],
  );

  if (isAllUsersLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (allUsers.length === 0) {
    return <h1>No users were found...</h1>;
  }

  return (
    <AllUsers
      allUsers={allUsers}
      defaultPage={defaultPage}
      paginationButtonsCount={paginationButtonsCount}
      handlePaginationClick={handlePaginationClick}
    />
  );
};

export default AllUsersContainer;
