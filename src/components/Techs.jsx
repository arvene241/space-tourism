import React, { useState } from "react";
import {
  Container,
  Heading3,
  Heading5,
  SubHeading2,
  Text,
} from "../styles/GlobalStyle";
import data from "../data/data.json";
import useBreakpoints from "../hooks/useBreakpoints";
import { Head, Tail, TechsStyle } from "../styles/components/TechsStyle";

export default function Techs() {
  const [active, setActive] = useState(0);

  const { isDesktop } = useBreakpoints();

  return (
    <Container className="page crew">
      <Heading5>
        <span>03</span>space launch 101
      </Heading5>
      <TechsStyle>
        <Head>
          {isDesktop ? (
            <img
              src={data.technology[active].images.portrait}
              alt={data.technology[active].name}
            />
          ) : (
            <img
              src={data.technology[active].images.landscape}
              alt={data.technology[active].name}
            />
          )}
        </Head>
        <Tail>
          <ul>
            {data.technology.map((tech, index) => (
              <button
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                key={index}
              >{index + 1}</button>
            ))}
          </ul>
          <div className="content">
            <SubHeading2>the terminology...</SubHeading2>
            <Heading3>{data.technology[active].name}</Heading3>
            <Text>{data.technology[active].description}</Text>
          </div>
        </Tail>
      </TechsStyle>
    </Container>
  );
}
