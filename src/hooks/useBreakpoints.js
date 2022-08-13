import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
  const breakpoints = {
    isMobile: useMediaQuery("(max-width: 375px"),
    isTablet: useMediaQuery("(min-width: 376px) and (max-width: 768px)"),
    isDesktop: useMediaQuery("(min-width: 1440px)"),
    // active: "sm",
  };

  return breakpoints;
}