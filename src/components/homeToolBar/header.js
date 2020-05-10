import React from 'react'

import './header.css'

const Header = props => {
    return (
        <header>
            <div className="container">
                <img className="logo" src="https://unsplash.it/55/55" alt="logo"/>
                <a href="/">小米手机</a>
                <a href="/">Redmi红米</a>
                <a href="/">电视</a>
                <a href="/">笔记本</a>
                <a href="/">家电</a>
                <a href="/">路由器</a>
                <a href="/">智能硬件</a>
                <a href="/">服务</a>
                <a href="/">社区</a>
                <div className="search-bar">
                    <label name="search">站内搜索</label>
                    <input type="text" className="search" name="search" ></input>
                    <input type="submit" className="submit-btn" ></input>
                    <div className="search-hot-word">
                        <a className="hot-word" href="/">小米10</a>
                        <a className="hot-word" href="/">Redmi K30 Pro</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header