import React from "react";
import Header from "../components/Header";
import Techs from "../components/Techs";
import { Background } from "../styles/pages/TechnologyStyle";

export default function Technology() {
  return (
    <Background>
      <Header active={3} />
      <Techs />
    </Background>
  );
}
