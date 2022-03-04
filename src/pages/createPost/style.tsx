import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 5rem;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    .title {
      margin-bottom: 2rem;
    }

    .title,
    .post {
      label,
      input {
        font-size: 2rem;
      }

      label {
        padding: 0 2rem;
        background-color: white;
      }
    }

    .post {
      width: 50%;
    }

    .button {
      margin-top: 2rem;
      padding: 2rem 5rem;
    }
  }
`;
