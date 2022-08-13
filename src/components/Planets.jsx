import React, { useState } from "react";
import {
  Details,
  Distance,
  Head,
  PlanetsStyle,
  Tail,
  Time,
} from "../styles/components/PlanetsStyle";
import {
  Container,
  Heading2,
  Heading5,
  SubHeading1,
  SubHeading2,
  Text,
} from "../styles/GlobalStyle";
import data from "../data/data.json";

export default function Planets() {
  const [active, setActive] = useState(0);

  return (
    <Container className="page">
      <Heading5>
        <span>01</span>pick your destination
      </Heading5>
      <PlanetsStyle>
        <Head>
          <img
            src={data.destinations[active].images.webp}
            alt={data.destinations[active].name}
          />
        </Head>
        <Tail>
          <ul>
            {data.destinations.map((planet, index) => (
              <button
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                key={index}
              >
                {planet.name}
              </button>
            ))}
          </ul>
          <Heading2 className="planets-h2">
            {data.destinations[active].name}
          </Heading2>
          <Text>{data.destinations[active].description}</Text>
          <hr></hr>
          <Details>
            <Distance>
              <SubHeading2>avg. distance</SubHeading2>
              <SubHeading1>{data.destinations[active].distance}</SubHeading1>
            </Distance>
            <Time>
              <SubHeading2>est. travel time</SubHeading2>
              <SubHeading1>{data.destinations[active].travel}</SubHeading1>
            </Time>
          </Details>
        </Tail>
      </PlanetsStyle>
    </Container>
  );
}
