import styled, { createGlobalStyle, css } from "styled-components";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  ${Variables};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-text);
    font-size: var(--default-fs);
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }

  a {
    text-decoration: none;
    color: var(--clr-white);
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5 {
    text-transform: uppercase;
    font-family: var(--font-main);
    font-weight: 400;
    color: var(--clr-white);
    text-align: center;

    @media screen and (min-width: 1440px) {
      text-align: left;
    }
  }
`;

export const Container = styled.div`
  margin: 0 25px;

  &.page {
    padding: 24px 0 28px;

    @media screen and (min-width: 768px) {
      padding: 40px 0 0;

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
  }

  &.home {
    @media screen and (min-width: 1440px) {
      padding: 0 160px;
      margin: 0;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 95px;
  }

  @media screen and (min-width: 1440px) {
    height: calc(100vh - 96px - 40px);
    margin: 0 160px;
    overflow: hidden;
  }
`;

export const FlexCenter = css`
  display: flex;
  align-items: center;
`;

export const PageStyle = css`
  justify-content: space-between;
  ${FlexCenter};
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const spanH5 = css`
  font-family: var(--font-secondary);
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.375px;
  }

  @media screen and (min-width: 1440px) {
    font-size: var(--h5-heading);
    line-height: 34px;
    letter-spacing: 4.725px;
  }
`;

export const MainHeading = styled.h1`
  font-size: 80px;
  line-height: 100px;
  padding: 16px 0;

  @media screen and (min-width: 768px) {
    font-size: var(--h1-heading);
    line-height: 172px;
    padding: 24px 0;
  }
`;

export const Heading2 = styled.h2`
  font-size: 56px;
  line-height: 64px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 92px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 115px;
  }
`;

export const Heading3 = styled.h3`
  font-size: 24px;
  line-height: 28px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 46px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 56px;
    line-height: 64px;
  }
`;

export const Heading4 = styled.h4`
  font-size: 16px;
  line-height: 18px;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    line-height: 37px;
  }
`;

export const Heading5 = styled.h5`
  ${spanH5};

  span {
    ${spanH5};
    font-weight: 700;
    margin-right: 18px;
    opacity: 0.25;
  }
`;

export const SubHeading1 = styled.h3`
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 32px;
  color: var(--clr-white);
  font-family: var(--font-main);
`;

export const SubHeading2 = styled.h4`
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  color: var(--clr-white);
  font-family: var(--font-secondary);
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: var(--default-fs);
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export default GlobalStyle;
