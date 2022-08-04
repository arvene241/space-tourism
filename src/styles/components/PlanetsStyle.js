import styled from "styled-components";
import { FlexCenter } from "../GlobalStyle";

export const PlanetsStyle = styled.div`
  padding: 24px 0 28px;
  justify-content: space-between;
  ${FlexCenter};
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 40px 0 62px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    flex-direction: row;
  }
`;

export const Head = styled.div`
  width: 330px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 573px;

    h5 {
      position: absolute;
      left: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    h5 {
      position: unset;
      text-align: left;
    }
  }

  span {
    font-family: var(--font-secondary);
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    margin-right: 18px;
    opacity: 0.25;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
    }
  }

  img {
    margin: 32px 0 26px;
    width: 170px;
    height: 170px;

    @media screen and (min-width: 768px) {
      margin: calc(124px - 40px) 53px;
      width: 300px;
      height: 300px;
    }

    @media screen and (min-width: 1440px) {
      margin: 97px 0 0;
      width: 445px;
      height: 445px;
    }
  }
`;

export const Tail = styled.div`
  width: 330px;

  @media screen and (min-width: 768px) {
    width: 573px;

    .planets-h2 {
      margin: 32px 0 8px;
    }

    hr {
      margin: 49px 0 28px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 445px;
    margin: 97px 0 0;
    
    .planets-h2 {
      margin: 37px 0 14px;
    }

    hr {
      margin: 54px 0 28px;
    }
  }

  .planets-h2 {
    margin: 20px 0 0;
  }

  hr {
    height: 1px;
    width: 100%;
    background-color: currentColor;
    opacity: 0.25;
    margin: 32px 0;
  }

  ul {
    ${FlexCenter};
    justify-content: center;
    gap: 26px;

    @media screen and (min-width: 1440px) {
      justify-content: start;
    }
  }

  button {
    background: transparent;
    color: var(--clr-white);
    border: none;
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    cursor: pointer;
    height: 28px;

    :hover,
    &.active {
      border-bottom: 3px solid var(--clr-white);
    }
  }
`;

export const Details = styled.div`
  ${FlexCenter};
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 70px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: start;

    h4,
    h3 {
      text-align: left;
    }
  }
`;

export const Distance = styled.div`
  h3 {
    padding: 12px 0 0;
  }
`;

export const Time = styled.div`
  h3 {
    padding: 12px 0 0;
  }
`;
