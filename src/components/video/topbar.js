import React from 'react'
import './topbar.css' 
import { FiShoppingCart } from "react-icons/fi";
const Topbar = props => {
    return (
        <nav>
            <div className="container">
                <a href="/">小米商城</a>
                <span className="bar">|</span>
                <a href="/">MIUI</a>
                <span className="bar">|</span>
                <a href="/">IoT</a>
                <span className="bar">|</span>
                <a href="/">云服务</a>
                <span className="bar">|</span>
                <a href="/">金融</a>
                <span className="bar">|</span>
                <a href="/">有品</a>
                <span className="bar">|</span>
                <a href="/">小爱开发平台</a>
                <span className="bar">|</span>
                <a href="/">企业团购</a>
                <span className="bar">|</span>
                <a href="/">资质证照</a>
                <span className="bar">|</span>
                <a href="/">协议规则</a>
                <span className="bar">|</span>
                <a href="/">下载app</a>
                <span className="bar">|</span>
                <a href="/">Select Location</a>
                <span className="space"></span>
                <span className="login">
                    <a href="/">登录</a>
                    <span className="bar">|</span>
                    <a href="/">注册</a>
                </span>
                <a href="/"  className="cart"><FiShoppingCart size="1.5em"/> 购物车 (0)</a>
            </div>
        </nav>
    )
}

export default Topbar