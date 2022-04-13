import React, { Component, useState } from "react";
import SongItem from "../SongItem/SongItem";
import './ContentView.css';
import isValid from "../../utils/isValid";
import getMetaData from "../../utils/getMetadata";

const ContentView = () => {
    const [songDetails, setSongDetails] = useState(false)
    const [input, setInput] = useState('')
    
    const searchClickHandler = async () => {
        const valid = await isValid(input)
        if (valid) {
            const data = await getMetaData(input);
            if (data[0]) {
                const details = {
                    title: data[0],
                    author: data[1],
                    thumbnail: data[2],
                    url: input,
                }
                setSongDetails(details);
            } else {
                setSongDetails(false);
            }
        } else {
            setSongDetails(false);
        }
        console.warn(valid)
        console.warn('clicked search')
    }

    const inputHandler = (input) => {
        setInput(input.target.value)
    }

    return (
        <div className="content-wrapper">
            <div className="content-search-bar">
                <input className="content-search-input" type="text" onChange={(e) => {
                    inputHandler(e)
                }}/>
                <div className="content-search-button" onClick={() => searchClickHandler()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                </div>
            </div>
            <br />
            {songDetails && <SongItem songDetails={songDetails}></SongItem>}
            
        </div>
    );
}

export default ContentView;