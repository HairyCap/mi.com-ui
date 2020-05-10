import React from 'react'
import './mainpage.css'
import BrickBox from '../brickBox/brickBox'
import Video from '../video/video'

const MainPage = props => {
    return (
        <div class="mainpage">
            <BrickBox title="手机"/>
            <BrickBox title="家电"/>
            <BrickBox title="智能"/>
            <BrickBox title="搭配"/>
            <BrickBox title="配件"/>
            <BrickBox title="周边"/>
            <Video title="视频"/>
        </div>
    )
}

export default MainPage