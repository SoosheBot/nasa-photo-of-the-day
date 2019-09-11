import React, { useState, useEffect } from "react";
import NasaCard from "/Users/Mahadevi/Lambda-School/nasa-photo-of-the-day/src/components/NasaCard.js";
import axios from "axios";
// import { thisExpression } from "@babel/types";




export default function NasaPOD() {
    const [title, setTitle] = useState('');
    const [copy, setCopy] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [headURL, setHDUrl] = useState('');

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            setTitle(response.data.title);
            setCopy(response.data.copyright);
            setDate(response.data.date);
            setDesc(response.data.explanation);
            setHDUrl(response.data.hdurl);
            
        
            console.log("THE CONSOLE", response);
        })
        .catch(error => {
            console.log("That's not the sky you're seeing!", error);
        });
    },[]);

    return (
        <div className="info">
              <NasaCard
                title={title.title}
                copyright={copy.copyright}
                date={date.date}
                description={desc.explanation}
                headUrl={headURL.hdurl}
              />
          
        </div>
    );
}