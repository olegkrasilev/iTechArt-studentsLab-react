import React, { useEffect, useState } from 'react';

import { Container, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';

type Properties = {
  incomingData: any;
  // @ TODO fix this later;
  renderData: JSX.Element[];
};

export const RenderPagination: React.FC<Properties> = ({ incomingData, renderData }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  useEffect(() => {
    if (incomingData.length > 0) {
      setData(incomingData);
    }
  }, [incomingData]);

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

  // Logic for displaying posts
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastData - dataPerPage;
  const currentData = renderData.slice(indexOfFirstPost, indexOfLastData);

  const paginationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const paginationButton = (event.target as HTMLButtonElement).textContent;

    if (paginationButton) {
      setCurrentPage(+paginationButton);
    }
  };

  // Logic for displaying posts number
  const pageNumbers = [];
  for (let index = 0; index < Math.ceil(data.length / dataPerPage); index++) {
    // Avoid number zero
    pageNumbers.push(index + 1);
  }

  return (
    <Container>
      {data.length === 0 ? (
        <h1 className={classes.title}>No data were found</h1>
      ) : (
        <ul>
          <Grid container spacing={2}>
            {currentData}
          </Grid>
          <Pagination
            hidePrevButton
            hideNextButton
            className={classes.centerPagination}
            onClick={paginationClick}
            count={pageNumbers.length}
          />
        </ul>
      )}
    </Container>
  );
};
