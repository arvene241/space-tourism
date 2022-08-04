import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Background } from "../styles/pages/HomeStyle";

export default function Home() {
  return (
    <Background>
      <Header active={0} />
      <Hero />
    </Background>
  );
}
