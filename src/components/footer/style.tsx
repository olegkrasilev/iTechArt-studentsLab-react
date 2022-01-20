import styled from 'styled-components';

export const StyledFooter = styled.footer`
  .menu,
  .menu__list {
    display: flex;
    justify-content: center;
  }

  .menu__list-item:not(:last-child) {
    margin-right: 20px;
  }

  .menu__list-link {
    font-size: 2rem;
  }
`;
