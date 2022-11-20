import styled from "styled-components";

export const HeaderContainerContent = styled.header`
  position: relative;
  background: var(--main-color);
  color: white;
  padding: 10px 50px;
`;

export const HeaderContainer = styled.div`
  p {
    margin: 30px 0;
  }

  .header--btn {
    border: none;
    background: var(--text-bg);
    padding: 10px;
    width: 10%;
    cursor: pointer;
    transition: 0.9s;
    border-radius: 4px;
    color: var(--thick-main);
    font-weight: bold;
    margin-bottom: 50px;
    &:hover {
      background: var(--light-main);
    }
  }
`;

export const HeaderSearchContainer = styled.div`
  height: 30px;
  background: white;
  border: 3px solid var(--blue);
  display: flex;
  color: var(--thick-main);
  justify-content: space-around;
  align-items: center;
  padding: 25px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 94%;

  svg {
    color: var(--text-bg);
  }

  .headerBtn {
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

  .headerSearchBox {
    display: flex;
    align-items: center;
    gap: 10px;

    .headerSearchInput {
      border: none;
      outline: none;
    }

    .headerSearchText {
      color: var(--text-bg);
      cursor: pointer;
    }

    .date {
      position: absolute;
      top: 50px;
    }

    .options {
      position: absolute;
      top: 50px;
      background: white;
      border-radius: 5px;
      -webkit-box-shadow: 0px 0px 10px -5px var(--thick-main);
      box-shadow: 0px 0px 10px -5px var(--thick-main);

      .optionsItem {
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin: 10px;

        .optionItemContainer {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: var(--thick-main);

          .optionCounterButton {
            width: 30px;
            height: 30px;
            border: 1px solid var(--thick-main);
            background: var(--text-bg);
            border-radius: 4px;
            cursor: pointer;
            transition: 0.9s;
            font-weight: bold;

            &:hover {
              background: var(--light-main);
            }
            &:disabled {
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }
`;
