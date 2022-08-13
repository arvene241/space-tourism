import React, { useState } from "react";
import { PeopleStyle, Head, Tail } from "../styles/components/PeopleStyle";
import {
  Container,
  Heading3,
  Heading4,
  Heading5,
  Text,
} from "../styles/GlobalStyle";
import data from "../data/data.json";

export default function People() {
  const [active, setActive] = useState(0);

  return (
    <Container className="page crew">
      <Heading5>
        <span>02</span>meet your crew
      </Heading5>
      <PeopleStyle>
        <Head>
          <img
            src={data.crew[active].images.webp}
            alt={data.crew[active].name}
          />
        </Head>
        <Tail>
          <ul>
            {data.crew.map((crew, index) => (
              <button
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                key={index}
              ></button>
            ))}
          </ul>
          <div>
            <Heading4>{data.crew[active].role}</Heading4>
            <Heading3>{data.crew[active].name}</Heading3>
            <Text>{data.crew[active].bio}</Text>
          </div>
        </Tail>
      </PeopleStyle>
    </Container>
  );
}
