import styled from 'styled-components';

export const StyledHeader = styled.header`
  .menu,
  .menu__list {
    display: flex;
  }

  .menu__list-item:not(:last-child) {
    margin-right: 20px;
  }

  .menu__list-link {
    font-size: 2rem;
  }
`;
