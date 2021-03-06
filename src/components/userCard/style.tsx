import styled from 'styled-components';

export const StyledCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  background-color: #26235c;
  box-shadow: 0px 4px 75px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 3rem;
  margin-top: 3rem;

  form {
    display: flex;
    flex-direction: column;
  }

  .MuiTextField-root {
    margin: 1rem 0;
  }

  .MuiInputLabel-root,
  .MuiOutlinedInput-input {
    color: white;
    font-size: 1.6rem;
  }

  .MuiInputLabel-root {
    padding: 0 1rem;
    background-color: #26235c;
  }

  .MuiFormHelperText-root {
    font-size: 1rem;
  }
`;
