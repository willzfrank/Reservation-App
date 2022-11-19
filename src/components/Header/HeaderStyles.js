import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--main-color);
  color: white;
  padding: 10px 50px;

  p {
    margin: 30px 0;
  }

  .header--btn {
    border: none;
    background: var(--text-bg);
    padding: 0.7rem;
    width: 10%;
    cursor: pointer;
    transition: 0.9s;
    border-radius: 10px;
    color: var(--thick-main);
    font-weight: bold;
    margin-bottom: 50px;
    &:hover {
      background: var(--light-main);
    }
  }
`;
