import styled from "styled-components";

export const LinkListPageStyles = styled.div`
  height: inherit;
`;

export const MenuStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  & > div {
    display: flex;
    align-items: center;

    & > div {
      &:not(:first-child) {
        margin-left: 1rem;
      }
    }
  }
`;

export const LinkedListStyles = styled.div`
  display: flex;
  padding: 5rem 0;
`;
