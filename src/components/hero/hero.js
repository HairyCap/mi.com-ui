import React from 'react'
import './hero.css'
import { FiChevronRight } from "react-icons/fi";

const category_itemzs = ["手机 电话卡","电视 盒子","笔记本 显示器 平板","家电 插线板","出行 穿戴","智能 路由器","电源 配件","健康 儿童","耳机 音箱","生活 箱包"]

const channals = ["小米秒杀","企业团购","F码通道","米粉卡","以旧换新","话费充值"]

const Hero = props => {
    return (
        <div className="home-hero">
            <div className="container">
                <div className="home-hero-main">
                    <img src="https://unsplash.it/1226/460" alt=""></img>
                    <div className="site-category">
                        <ul className="category-items">
                            {category_itemzs.map((item, i)=><li className="category-item" key={i}><a href="/">{item}</a><span className="arrow"><FiChevronRight size="1.3em"/></span></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="home-hero-sub">
                    <div className="home-channal-list">
                        {channals.map((channal,i)=><span className="home-channal" key={i}><a href="/">{channal}</a></span>)}
                    </div>
                    <a href="/" className="home-hero-sub-item"><img src="https://unsplash.it/316/170" alt=""/></a>
                    <a href="/" className="home-hero-sub-item"><img src="https://unsplash.it/316/170" alt=""/></a>
                    <a href="/" className="home-hero-sub-item"><img src="https://unsplash.it/316/170" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Hero