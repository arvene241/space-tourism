import styled from "styled-components";
import { FlexCenter } from "../GlobalStyle";

export const HeaderStyle = styled.header`
  padding: 25px 25px 0;
  position: relative;
  ${FlexCenter};
  justify-content: space-between;

  hr {
    display: none;
  }

  @media screen and (min-width: 768px) {
    padding: 0 0 0 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 0 0 55px;

    hr {
      position: absolute;
      display: block;
      height: 1px;
      width: 35%;
      z-index: 95;
      background-color: currentColor;
      left: 207px;
      opacity: 0.25;
    }
  }
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--clr-nav);
  backdrop-filter: var(--backdrop-filter);
  height: 100vh;
  width: 70%;
  padding: 118px 0 0 32px;
  transform: translateX(100%);
  transition: transform 0.3s ease 0s;

  &.open {
    display: block;
    transform: translateX(0px);
    z-index: 90;
  }

  @media screen and (min-width: 768px) {
    ${FlexCenter};
    position: unset;
    width: 450px;
    height: 96px;
    padding: 0;
    transform: unset;

    &.open {
      transform: unset;
      display: flex;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 830px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 100%;

    @media screen and (min-width: 768px) {
      justify-content: center;
      flex-direction: row;
      height: 100%;
      gap: 37px;
    }

    @media screen and (min-width: 1440px) {
      gap: 48px;
    }

    li {
      user-select: none;
      cursor: pointer;

      @media screen and (min-width: 768px) {
        height: 100%;

        :hover,
        &.active {
          border-right: 0px !important;
          border-bottom: 3px solid var(--clr-white);
        }
      }

      :hover,
      &.active {
        border-right: 3px solid var(--clr-white);
      }

      a {
        font-family: var(--font-secondary);
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        ${FlexCenter};
        height: 100%;

        span {
          padding-right: 11px;
          font-weight: 700;

          @media screen and (min-width: 768px) and (max-width: 1440px) {
            display: none;
          }
        }
      }
    }
  }
`;

export const Menu = styled.div`
  z-index: 99;
  width: 21px;
  height: 21px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
