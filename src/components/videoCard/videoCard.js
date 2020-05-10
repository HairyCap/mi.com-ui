import React from 'react'
import './videoCard.css'

const VideoCard = ({title}) => {
    return (
        <div className="videoCard">
            <div className="thumbnail">
                <a href="/">
                    <img src="https://unsplash.it/296/180" alt=""></img>
                </a>
            </div>
            <div className="videoTitle">
                {title}
            </div>
        </div>
    )
}

export default VideoCard