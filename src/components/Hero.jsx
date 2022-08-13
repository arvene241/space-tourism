import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Content, HeroStyle } from "../styles/components/HeroStyle";
import { Container, Heading5, MainHeading, Text } from "../styles/GlobalStyle";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Container className="home">
      <HeroStyle>
        <Content>
          <Heading5>SO, YOU WANT TO TRAVEL TO</Heading5>
          <MainHeading>SPACE</MainHeading>
          <Text>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </Content>
        <Button onClick={() => navigate('/destination')}>explore</Button>
      </HeroStyle>
    </Container>
  );
}
