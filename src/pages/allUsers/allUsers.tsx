import { Container, Grid, Pagination } from '@mui/material';
import React from 'react';

import User from './user';

import { User as UserT } from 'src/types/users';
import { useStyles } from 'src/styles/pagination';

type Properties = {
  allUsers: UserT[];
  defaultPage: number;
  paginationButtonsCount: number;
  handlePaginationClick: (event: React.ChangeEvent<unknown>, paginationPage: number) => void;
};

const AllUsers: React.FC<Properties> = ({ allUsers, defaultPage, paginationButtonsCount, handlePaginationClick }) => {
  const classes = useStyles();

  return (
    <Container>
      <ul>
        <Grid container spacing={2}>
          {allUsers.map(item => {
            const { email, firstName, lastName, id } = item;

            return <User id={id} key={id} email={email} firstName={firstName} lastName={lastName} />;
          })}
        </Grid>
        <Pagination
          hidePrevButton
          hideNextButton
          className={classes.centerPagination}
          page={defaultPage}
          onChange={handlePaginationClick}
          count={paginationButtonsCount}
          size="large"
        />
      </ul>
    </Container>
  );
};

export default AllUsers;
