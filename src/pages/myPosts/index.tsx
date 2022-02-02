import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadUserPostsAction } from '../../redux/action/loadUserPosts';
import { selectUserId } from '../../redux/selector';

const MyPosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserPostsAction());
  }, [dispatch]);

  // const renderUsers = allUsers.map(item => {
  //   const { email, firstName, lastName, id } = item;
  //   return (
  //     <Grid item key={id} xs={12}>
  //       <Card>
  //         <CardActionArea>
  //           <CardContent>
  //             <Typography gutterBottom variant="h6" component="div">
  //               {firstName} {lastName}
  //             </Typography>
  //             <Typography gutterBottom variant="body1" component="div">
  //               email: {email}
  //             </Typography>
  //           </CardContent>
  //         </CardActionArea>
  //       </Card>
  //     </Grid>
  //   );
  // });
  // return <RenderPagination incomingData={allUsers} renderData={renderUsers} />;
  return <h1>My posts</h1>;
};

export default MyPosts;
