import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #f3f4f6;
  box-shadow: 0px 4px 6px -4px rgba(24, 39, 75, 0.12), 0px 8px 8px -4px rgba(24, 39, 75, 0.08);

  .menu {
    min-height: 80px;
    align-items: center;
    justify-content: flex-end;
  }

  .menu,
  .menu__list {
    display: flex;
  }

  .menu__list-item:not(:last-child) {
    margin-right: 20px;
  }

  .menu__list-link,
  .menu__list-link--active {
    display: inline-block;
    font-size: 3rem;
    color: darkblue;
    margin: 2.5rem;
    padding-bottom: 5px;
    cursor: pointer;

    background: linear-gradient(currentColor 0 0) 100% 100% / var(--p, 0%) 3px no-repeat,
      linear-gradient(currentColor 0 0) var(--d, -101%) 100% /50% 3px no-repeat;
    transition: 0.3s, background-size 0.3s 0.2s;

    &:hover {
      --d: 0%;
      --p: 50%;
      transition: 0.3s, background-position 0.3s 0.2s;
    }
  }

  .menu__list-link--active {
    --d: 0%;
    --p: 50%;
    transition: 0.3s, background-position 0.3s 0.2s;
  }
`;
