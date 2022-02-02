import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { loadUsersAction } from 'src/redux/action/users';
import { Users } from 'src/types';
import { RenderPagination } from 'src/components/pagination';
import { selectALlUsers } from 'src/redux/selector';

export const AllUsers: React.FC = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectALlUsers);

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
              <Typography gutterBottom variant="h6" component="div">
                {firstName} {lastName}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                email: {email}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return <RenderPagination incomingData={allUsers} renderData={renderUsers} />;
};
