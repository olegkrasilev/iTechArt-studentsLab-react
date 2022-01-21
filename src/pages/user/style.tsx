import styled from 'styled-components';

export const StyledCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  background-color: #26235c;
  box-shadow: 0px 4px 75px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 3rem;

  .title {
    font-size: 3.5rem;
    line-height: 4.2rem;
    text-align: center;
    color: #ffffff;
    margin-bottom: 2rem;
  }

  .email {
    font-size: 2.3rem;
    line-height: 2.8rem;
    text-align: center;
    color: #a79ae0;
  }
`;
