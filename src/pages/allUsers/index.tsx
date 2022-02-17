import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress, Container, Grid, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import User from './user';

import { useStyles } from 'src/styles/pagination';
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

  const classes = useStyles();

  const handlePaginationClick = (vent: React.ChangeEvent<unknown>, paginationPage: number) => {
    navigate(`../allUsers/${paginationPage}`, { replace: true });
    setDefaultPage(paginationPage);
  };

  if (isAllUsersLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container>
      {allUsers.length > 0 ? (
        <ul>
          <Grid container spacing={2}>
            {allUsers.map(item => {
              const { email, firstName, lastName, id } = item;

              return <User key={id} email={email} firstName={firstName} lastName={lastName} />;
            })}
          </Grid>
          <Pagination
            hidePrevButton
            hideNextButton
            className={classes.centerPagination}
            page={defaultPage}
            onChange={handlePaginationClick}
            count={paginationButtonsCount}
          />
        </ul>
      ) : (
        <h1 className={classes.title}>No Users were found</h1>
      )}
    </Container>
  );
};

export default AllUsers;
