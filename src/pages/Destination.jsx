import React from "react";
import Header from "../components/Header";
import Planets from "../components/Planets";
import { Background } from "../styles/pages/DestinationStyle";

export default function Destination() {
  return (
    <Background>
      <Header active={1} />
      <Planets />
    </Background>
  );
}
