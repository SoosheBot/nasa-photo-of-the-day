import React from "react";

const NasaCard = props => {
    return (
        <div className="info-list">
            <h2>Title: {props.title}</h2>
            <h4>Copyright: {props.copyright}</h4>
            <h3>Date: {props.date}</h3>
            <p>{props.explanation}</p>
            <img className="hd-img" alt="NASA images" src={props.hdUrl} />
        </div>
      );
};

export default NasaCard;