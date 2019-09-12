import React from "react";
import styled from 'styled-components';
import logo from "../../images/nasa-logo.png";

const LogoContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
`;
const NasaLogo = styled.img`
  margin-top:1rem;
  animation: App-logo-spin infinite 20s linear;
  height: 20vmin;
  pointer-events: none;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  `;

const AppLogo = () => {
    return (
      <LogoContainer>
        <NasaLogo src={logo} alt="Rotating NASA Logo" />
      </LogoContainer>
    );
  };

export default AppLogo;