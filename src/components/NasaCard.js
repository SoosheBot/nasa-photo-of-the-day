import React from "react";

const NasaCard = props => {
    console.log("the props", props);
    return (
        <div className="info-list" key={props.data}>
            <h2>Title: {props.title}</h2>
            <img className="imgURL" alt="NASA images" src={props.hdurl}></img>
            <p><strong>About this image:</strong> {props.explanation}</p>
            <h5>Copyright: {props.copyright}</h5>
            <h5>Date: {props.date}</h5>
            
            
        </div>
      );
};

export default NasaCard;