import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
    margin:25px;
    display:flex;
    font-size: 1rem;
    font-weight:bold;
    color: blue;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    object-fit: scale-down;
    flex-shrink: 2;

a{
    text-decoration:none;
}

a:hover{
    color:red;
}
`;


export default function NasaNav (){
    return(
    <NavBar>
        {/* <a href="http://localhost:3000/">Home</a> */}
        <a href="https://nasa-photo-of-the-day-jtyna3tve.now.sh/">Home</a>
        <a href="https://www.nasa.gov/">Learn About Nasa</a>
        <a href="https://en.wikipedia.org/wiki/Astronomical_object">Astronomical Objects</a>
        <a href="https://gph.is/1VK8fyl">Aliens?</a>
    </NavBar>
    );
}
