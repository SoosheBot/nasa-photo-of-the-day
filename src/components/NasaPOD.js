import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";


export default function NasaPOD() {
  const [nasaPic, setNasaPics] = useState("");

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=RLaRimFkvCAjoHXsKyaXBbLeMnGAexyGZo4pkwZ6`)
        .then(response => {
            setNasaPics(response.data) 
            console.log("NASA", response);
        })
        .catch(error => {
            console.log("That's not the sky you're seeing!", error);
        });
    },[]);

    return (
        <div className="info">
              <NasaCard
                titleProp={nasaPic.title}
                url={nasaPic.hdurl}
                description={nasaPic.explanation}
                date={nasaPic.date}
                copyright={nasaPic.copyright} 
                />
        </div>
    );
}