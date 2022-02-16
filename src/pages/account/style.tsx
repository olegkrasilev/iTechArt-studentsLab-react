import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
`;

export const useStyles = makeStyles({
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
