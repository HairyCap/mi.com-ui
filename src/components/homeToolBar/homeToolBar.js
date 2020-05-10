import React from 'react'
import './homeToolBar.css'
import { MdPhoneAndroid } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillTool } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdVerticalAlignTop } from "react-icons/md";

const HomeToolBar = props => {
    return (
        <div className="homeToolBar">
            <div className="maintools">
                <a href="/"><div className="tool"><MdPhoneAndroid size="2em"/><span>手机APP</span></div></a>
                <a href="/"><div className="tool"><AiOutlineUser size="2em"/><span>个人中心</span></div></a>
                <a href="/"><div className="tool"><AiFillTool size="2em"/><span>售后服务</span></div></a>
                <a href="/"><div className="tool"><FaHeadset size="2em"/><span>人工服务</span></div></a>
                <a href="/"><div className="tool"><FiShoppingCart size="2em"/><span>购物车</span></div></a>
            </div>
            <a href="/"><div className="toTop"><MdVerticalAlignTop size="2em"/><span>回顶部</span></div></a>
        </div>
    )
}

export default HomeToolBar