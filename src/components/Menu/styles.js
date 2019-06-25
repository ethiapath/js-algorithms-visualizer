import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  height: 100vh;

  /* Menu Children - Components rendered inside of <Menu>{childre}</Menu>  */
  & > div:last-child {
    padding: 2rem 1rem;
    width: 100%;
    height: 100vh;
  }
`;

export const MenuStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkGray};
  width: 30rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;

  a {
    text-decoration: none;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  /* Header/Logo */
  & > div:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgba(255, 255, 255, 0.9);

    & svg {
      width: 5rem;
      height: 5rem;
    }
  }

  & ul {
    margin: 0 0.5rem;
    /* Projects Links: Github etc. */
    & > div.project-links {
      a:first-child li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
      }
    }

    .menu-group {
      margin: 1.5rem 0;
      & > h4 {
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.5;
        margin: 0.5rem 0;
      }
    }

    & li {
      list-style: none;
      color: rgba(255, 255, 255, 0.5);

      &:hover {
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
`;
