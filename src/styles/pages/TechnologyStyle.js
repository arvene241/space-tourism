import styled from "styled-components";

export const Background = styled.div`
  background-image: url("./src/assets/technology/background-technology-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;

  @media screen and (min-width: 768px) {
    background-image: url("./src/assets/technology/background-technology-tablet.jpg");
    height: auto;
  }

  @media screen and (min-width: 1440px) {
    background-image: url("./src/assets/technology/background-technology-desktop.jpg");
  }
`;
