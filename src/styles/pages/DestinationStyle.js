import styled from "styled-components";

export const Background = styled.div`
  background-image: url("/assets/destination/background-destination-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    background-image: url("/assets/destination/background-destination-tablet.jpg");
    height: auto;
  }

  @media screen and (min-width: 1440px) {
    background-image: url("/assets/destination/background-destination-desktop.jpg");
  }
`;
