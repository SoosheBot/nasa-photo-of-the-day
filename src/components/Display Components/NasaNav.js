import React from "react";
import axios from "axios";
import styled from "styled-components";

const NavBar = styled.div`
width:100%;
margin:25px;
display:flex;
font-size: 1rem;
font-weight:bold;
color: blue;
flex-direction:row;
justify-content:space-evenly;
align-items:center;

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
        <a href="http://localhost:3000/">Home</a>
        <a href="https://www.nasa.gov/">Learn About Nasa</a>
        <a href="https://en.wikipedia.org/wiki/Astronomical_object">Astronomical Objects</a>
        <a href="https://gph.is/1VK8fyl">It's Not Aliens (probably)</a>
    </NavBar>
    );
}
