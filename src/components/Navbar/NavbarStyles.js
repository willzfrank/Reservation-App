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
      font-size: 30px;
    }
  }

  .Navbar--top--right {
    display: flex;
    gap: 1rem;

    .Nav--btn {
      border: none;
      background: var(--text-bg);
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: 0.9s;
      border-radius: 10px;
      font-weight: bold;
      &:hover {
        background: var(--light-main);
      }
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
      background: var(--text-bg);
      border-radius: 10px;
      cursor: pointer;
      color: var(--main-color);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-weight: bold;

      &:hover {
        border-color: var(--light-main);
        background: var(--light-main);
        color: var(--main-color);
        transition: 0.9s;
      }
    }
  }
`;
