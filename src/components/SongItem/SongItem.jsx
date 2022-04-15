import React, { Component } from "react";
import './SongItem.css';


const SongItem = (props) => {

    const downloadButtonhandler = () => {
        console.warn(props.songDetails.url);

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Disposition': 'attachment', __filename: `${props.songDetails.title}.mp3`,
            mode: 'no-cors', }
            };
            
            fetch(`https://staging-ytm.parthpatel148.repl.co/downloadmp3?URL=${props.songDetails.url}`, requestOptions)
            .then((res) => {
                return res.blob();
            })
            .then((blob) => {
                const href = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', `${props.songDetails.title}.mp3`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((err) => {
                return Promise.reject({ Error: 'Something Went Wrong', err });
            })
    }


    return (
        <div className="song-item-wrapper">
            <div className="song-item-wrapper-2">
            <img className="song-item-img" src={props.songDetails.thumbnail} alt="" />
            <div className="song-item-content">
                <p className="song-item-content-title">{props.songDetails.title}</p>
                <p className="song-item-content-author">{props.songDetails.author}</p>
            </div>
            </div>
            
            <div className="song-item-download-button" onClick={() => {downloadButtonhandler()}}>
                <svg width="200" height="200" viewBox="0 0 229 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M114.5 0C51.5396 0 0 51.5396 0 114.5C0 177.46 51.5396 229 114.5 229C177.46 229 229 177.46 229 114.5C229 51.5396 177.46 0 114.5 0ZM121.071 197.071L184.711 133.431C188.616 129.526 188.616 123.195 184.711 119.289C180.805 115.384 174.474 115.384 170.569 119.289L124 165.858V32H104V165.858L57.4315 119.289C53.5262 115.384 47.1946 115.384 43.2893 119.289C39.3841 123.195 39.3841 129.526 43.2893 133.431L106.929 197.071C110.834 200.976 117.166 200.976 121.071 197.071Z" fill="#e6d5b1"/>
                </svg>
            </div>
        </div>
    );
}

export default SongItem;