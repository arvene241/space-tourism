import styled from "styled-components";
import { FlexCenter, PageStyle } from "../GlobalStyle";

export const PeopleStyle = styled.div`
  ${PageStyle};

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`;

export const Head = styled.div`
  text-align: center;
  border-bottom: 2px solid #383b4b;
  margin: 32px 0;
  height: 100%;
  width: 327px;

  img {
    width: auto;
    height: 223px;
    vertical-align: bottom;

    @media screen and (min-width: 768px) {
      height: 572px;
    }

    @media screen and (min-width: 1440px) {
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    width: auto;
    border: 0;
    margin: 0;
  }
`;

export const Tail = styled.div`
  width: 327px;

  @media screen and (min-width: 768px) {
    width: 530px;
    display: flex;
    flex-direction: column-reverse;
    margin: 60px 0 40px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }

  ul {
    ${FlexCenter};
    justify-content: center;
    gap: 16px;
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
      margin: 40px 0 0;
    }

    @media screen and (min-width: 1440px) {
      margin: 80px 0 0;
      justify-content: start;
    }

    button {
      border-radius: 100%;
      width: 10px;
      height: 10px;
      background: var(--clr-white);
      border: none;
      opacity: 0.17;
      cursor: pointer;

      @media screen and (min-width: 1440px) {
        width: 15px;
        height: 15px;
      }

      :hover,
      &.active {
        opacity: 1;
      }
    }
  }

  h3 {
    margin: 8px 0 16px;

    @media screen and (min-width: 1440px) {
      width: 614px;
      margin: 15px 0 27px;
    }
  }
`;
