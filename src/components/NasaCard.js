import React from "react";
import styled from "styled-components";

const TextCard = styled.div`
width:100%;
color: black;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
margin-bottom: 20px;
`;


const ImgCard = styled.img`
object-fit: scale-down;
flex-shrink: 2;
`;

const NasaCard = props => {
    console.log("the props", props);
    return (

        <TextCard key={props.data}>
            <h2>Title: {props.title}</h2>
            <ImgCard alt="NASA images" src={props.url}/>
            <h6>Date: {props.date}</h6>
            <p><strong>About this image: </strong> {props.explanation}</p>
            <h5>Copyright: {props.copyright}</h5>
        </TextCard>
    );
};

export default NasaCard;