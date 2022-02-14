import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress, Container, Grid, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { useNavigate, useParams } from 'react-router-dom';

import User from './user';

import { loadUsersAction } from 'src/redux/action/users';
import { selectALlUsers, selectIsAllUsersLoading, selectTotalUsersInDB } from 'src/redux/selector';

const AllUsers: React.FC = () => {
  const dispatch = useDispatch();
  const { page } = useParams();
  const navigate = useNavigate();
  const [defaultPage, setDefaultPage] = useState(1);
  const allUsers = useSelector(selectALlUsers);
  const isAllUsersLoading = useSelector(selectIsAllUsersLoading);
  const totalPostInDB = useSelector(selectTotalUsersInDB);
  const postPerPage = 5;
  const paginationButtonsCount = Math.ceil(Number(totalPostInDB) / postPerPage);

  useEffect(() => {
    dispatch(loadUsersAction(page));
  }, [dispatch, page]);

  const useStyles = makeStyles({
    centerPagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    title: {
      textAlign: 'center',
      fontSize: 40,
    },
  });

  const classes = useStyles();

  const handlePaginationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const paginationButtonNumber = (event.target as HTMLButtonElement).textContent;

    if (paginationButtonNumber) {
      navigate(`../allUsers/${paginationButtonNumber}`, { replace: true });
      setDefaultPage(+paginationButtonNumber);
    }
  };

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

  return (
    <Container>
      {allUsers.length === 0 ? (
        <h1 className={classes.title}>No Users were found</h1>
      ) : (
        <ul>
          <Grid container spacing={2}>
            {renderUsers}
          </Grid>
          <Pagination
            hidePrevButton
            hideNextButton
            className={classes.centerPagination}
            page={defaultPage}
            onClick={handlePaginationClick}
            count={paginationButtonsCount}
          />
        </ul>
      )}
    </Container>
  );
};

export default AllUsers;
