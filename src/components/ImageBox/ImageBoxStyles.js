import styled from "styled-components";

export const ImageBox = styled.section`
  margin-top: 60px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  z-index: 1;

  .imageBoxItem {
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
    width: 330px;
    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    .imageBoxTitle {
      position: absolute;
      bottom: 20px;
      left: 20px;
      font-weight: bold;
      background-color: transparent;
      padding: 1rem;
      border-radius: 5px;
    }
  }
`;
