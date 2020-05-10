import React from 'react'
import './video.css'
import VideoCard from '../videoCard/videoCard'
import { FiChevronRight } from "react-icons/fi";

const damiCard = {
    title: "小米10青春版 发布会",
  }

const damArr = new Array(4).fill(damiCard);

const Video = ({title}) => {
    return (
        <div className="VideoBox">
            <a className="baner" href="/">
                <img src="https://unsplash.it/1226/120" alt="baner"></img>
            </a>
            <div className="boxTitle">
                <span>{title}</span>
                <span className="titlespace"></span>
                <a href="/"><span>查看全部 <FiChevronRight size="1em"/></span></a>
            </div>
            <div className="boxMain">
                <div className="videoCards">
                    {damArr.map(c => <VideoCard {...c} />)}
                </div>
            </div>
        </div>
    )
}

export default Video;