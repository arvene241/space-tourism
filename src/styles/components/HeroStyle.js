import styled from "styled-components";
import { FlexCenter } from "../GlobalStyle";

export const HeroStyle = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  flex-direction: column;
  padding: 50px 0;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 100px 0 90px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  text-align: center;
  width: 327px;

  h5 {
    color: var(--secondary-color);
  }

  @media screen and (min-width: 768px) {
    width: 450px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;

    h1 {
      margin-left: -10px;
    }

    h5 {
      text-align: left;
    }
  }
`;

export const Button = styled.button`
  margin-top: 80px;
  width: 150px;
  height: 150px;
  background-color: var(--clr-white);
  border-radius: 100%;
  border: none;
  font-family: var(--font-main);
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: var(--primary-color);
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-top: 156px;
    width: 242px;
    height: 242px;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;

    :hover::before {
      width: calc(242px + 88px) !important;
      height: calc(242px + 88px) !important;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 274px;

    :hover::before {
      width: calc(274px + 88px) !important;
      height: calc(274px + 88px) !important;
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.3s linear;
    width: 0px;
    height: 0px;
  }

  :hover::before {
    width: calc(150px + 88px);
    height: calc(150px + 88px);
  }
`;
