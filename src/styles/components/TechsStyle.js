import styled from "styled-components";
import { FlexCenter, PageStyle } from "../GlobalStyle";

export const TechsStyle = styled.div`
  ${PageStyle};
`;

export const Head = styled.div`
  text-align: center;
  margin: 32px 0;
  position: absolute;
  width: 100%;

  img {
    width: 100%;
    height: 170px;

    @media screen and (min-width: 768px) {
      height: 310px;
    }

    @media screen and (min-width: 1440px) {
      height: 527px;
    }
  }

  @media screen and (min-width: 768px) {
    border: 0;
    margin: 84px 0 56px;
  }

  @media screen and (min-width: 1440px) {
    right: 0;
    width: 515px;
    margin: 0;
  }
`;

export const Tail = styled.div`
  margin-top: 236px;
  width: 327px;

  @media screen and (min-width: 768px) {
    width: 458px;
    margin-top: 426px;
    margin-bottom: 62px;
  }

  @media screen and (min-width: 1440px) {
    width: auto;
    ${FlexCenter};
    margin: 0;
  }

  ul {
    ${FlexCenter};
    justify-content: center;
    gap: 16px;
    margin-bottom: 32px;

    @media screen and (min-width: 1440px) {
      flex-direction: column;
      margin-right: 80px;
      margin-bottom: 0;
    }

    button {
      border-radius: 100%;
      width: 40px;
      height: 40px;
      background: transparent;
      border: 1px solid var(--clr-white);
      opacity: 0.25;
      cursor: pointer;
      color: var(--clr-white);

      @media screen and (min-width: 768px) {
        width: 60px;
        height: 60px;
      }

      @media screen and (min-width: 1440px) {
        width: 80px;
        height: 80px;
      }

      :hover,
      &.active {
        opacity: 1;
        background-color: var(--clr-white);
        color: var(--primary-color);
      }
    }
  }

  .content {
    @media screen and (min-width: 1440px) {
      width: 470px;
    }
  }

  h3 {
    margin: 8px 0 16px;

    @media screen and (min-width: 1440px) {
      margin: 15px 0 27px;
    }
  }

  h4 {
    color: var(--secondary-color);

    @media screen and (min-width: 1440px) {
      text-align: left;
    }
  }
`;
