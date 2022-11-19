import styled from "styled-components";

export const NavbarContainer = styled.nav`
  .Navbar--top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background: var(--main-color);
    h2 {
      color: white;
    }
  }

  .Navbar--top--right {
    display: flex;
    gap: 1rem;

    .Nav--btn {
      border: none;
      background: var(--light-main);
      padding: 0.5rem;
      transition: 0.9s;
    }
  }
`;

export const NavbarLists = styled.nav`
  color: white;
  background: var(--main-color);
  padding: 50px;

  ul {
    display: flex;
    align-items: center;
    gap: 50px;

    li {
      list-style: none;
      border: 1px solid white;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        border-color: var(--light-main);
        background: var(--light-main);
        color: var(--main-color);
        transition: 0.9s;
      }
    }
  }
`;
