import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HeaderStyle, Logo, Menu, Nav } from "../styles/components/HeaderStyle";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

export default function Header(props) {
  const { active } = props;
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <Logo onClick={() => navigate('/')}>
        <img src={logo} alt="logo" />
      </Logo>
      <hr></hr>
      <Nav className={toggle ? "open" : ""}>
        <ul>
          {["home", "destination", "crew", "technology"].map((item, index) => (
            <li
              key={item}
              className={active === index ? "active" : ""}
            >
              <Link to={`/${item}`}>
                <span>0{index}</span>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
      <Menu onClick={() => setToggle((toggle) => !toggle)}>
        {toggle ? (
          <img src={close} alt="close-menu" />
        ) : (
          <img src={menu} alt="menu" />
        )}
      </Menu>
    </HeaderStyle>
  );
}
