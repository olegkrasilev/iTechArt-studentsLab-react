import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Backdrop, CardActionArea, CircularProgress, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

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

    return (
      <Grid item key={id} xs={12}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="p">
                {firstName} {lastName}
              </Typography>
              <Typography gutterBottom variant="body1" component="address">
                email: {email}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
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
