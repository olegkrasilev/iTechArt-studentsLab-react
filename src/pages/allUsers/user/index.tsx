import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getRequestedUserInfo } from 'src/redux/action/getRequestedUserInfo';

type Properties = {
  email: string;
  firstName: string;
  lastName: string;
  id: number;
};
const User: React.FC<Properties> = ({ email, firstName, lastName, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getRequestedUserInfo({ userID: id }));
    navigate('../requestedUser/1');
  };

  return (
    <Grid item xs={12}>
      <Card onClick={handleClick}>
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
};

export default User;
