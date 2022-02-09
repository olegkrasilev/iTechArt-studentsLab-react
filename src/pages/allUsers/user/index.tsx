import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

type Properties = {
  email: string;
  firstName: string;
  lastName: string;
};
const User: React.FC<Properties> = ({ email, firstName, lastName }) => (
  <Grid item xs={12}>
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

export default User;
