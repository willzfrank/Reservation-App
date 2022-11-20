import styled from "styled-components";

export const SearchBox = styled.div`
  border: 2px solid var(--blue);
  background: var(--light-blue);
  color: white;
  height: max-content;
  padding: 10px;
  border-radius: 5px;

  .form {
    margin: 10px 0;

    .destinationInput {
      display: flex;
      gap: 5px;
      flex-direction: column;

      .destinationInputBox {
        padding: 10px;
        border-radius: 5px;
      }
    }

    .checkInInput {
      margin: 5px 0;
      display: flex;
      gap: 5px;
      flex-direction: column;

      .optionsContainer {
        .optionsContent {
          display: flex;
          padding: 6px 0;
          align-items: center;
          justify-content: space-between;
          gap: 10px;

          input {
            width: 20%;
            padding: 5px;
            border-radius: 4px;
            outline: none;
          }
        }
      }
      .checkInContainer {
        background-color: white;
        color: var(--thick-main);
        padding: 10px;
        border-radius: 5px;
        text-align: left;
      }
    }

    button {
      border: none;
      background: var(--text-bg);
      padding: 9px 13px;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.9s;
      font-weight: bold;

      &:hover {
        background: var(--light-main);
      }
    }
  }
`;
