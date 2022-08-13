import React from "react";
import Header from "../components/Header";
import People from "../components/People";
import { Background } from "../styles/pages/CrewStyle";

export default function Crew() {
  return (
    <Background>
      <Header active={2} />
      <People />
    </Background>
  );
}
