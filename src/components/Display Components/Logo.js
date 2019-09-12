import React from "react";
import styled from 'styled-components';
import logo from "../../images/nasa-logo.png";

const LogoContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items:center;
`;
const NasaLogo = styled.img`
  margin-top:1rem;
  animation: App-logo-spin infinite 20s linear;
  height: 20vmin;
  pointer-events: none;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  object-fit: scale-down;
  flex-shrink: 2;
`;

const AppLogo = () => {
    return (
      <LogoContainer>
        <NasaLogo src={logo} alt="Rotating NASA Logo" />
      </LogoContainer>
    );
  };

export default AppLogo;