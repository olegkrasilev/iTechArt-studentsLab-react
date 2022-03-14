import styled from 'styled-components';

import { StyledHeader } from 'src/components/header/style';

export const StyledFooter = styled(StyledHeader)`
  .menu {
    justify-content: center;
  }

  .menu__list-link,
  .menu__list-link--active {
    font-size: 3rem;
  }
`;
