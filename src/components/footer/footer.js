import React from 'react'
import './footer.css'
import { AiFillTool } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineSmile } from "react-icons/ai";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";

const Footer = props => {
    return (
        <div className="footer">
            <div className="footer-service">
                <a className="service" href="/"><span><AiFillTool size="2em"/></span>预约维修服务</a>
                <a className="service" href="/"><span><AiOutlineShopping size="2em"/></span>7天无理由退货</a>
                <a className="service" href="/"><span><AiOutlineSmile size="2em"/></span>15天免费换货</a>
                <a className="service" href="/"><span><AiOutlineTransaction size="2em"/></span>满99元包邮</a>
                <a className="service" href="/"><span><AiOutlineTeam size="2em"/></span>520余家售后网点</a>
            </div>
            <div className="footer-links">
                <div className="links">
                    <p>帮助中心</p>
                    <a href="/">账号管理</a>
                    <a href="/">购物指南</a>
                    <a href="/">订单操作</a>
                </div>
                <div className="links">
                    <p>服务支持</p>
                    <a href="/">售后政策</a>
                    <a href="/">自助服务</a>
                    <a href="/">相关下载</a>
                </div>
                <div className="links">
                    <p>线下门店</p>
                    <a href="/">小米之家</a>
                    <a href="/">服务网点</a>
                    <a href="/">授权体验店</a>
                </div>
                <div className="links">
                    <p>关于小米</p>
                    <a href="/">了解小米</a>
                    <a href="/">加入小米</a>
                    <a href="/">投资者关系</a>
                    <a href="/">廉洁举报</a>
                </div>
                <div className="links">
                    <p>关注我们</p>
                    <a href="/">新浪微博</a>
                    <a href="/">官方微信</a>
                    <a href="/">联系我们</a>
                    <a href="/">公益基金</a>
                </div>
                <div className="links">
                    <p>特色服务</p>
                    <a href="/">F码通道</a>
                    <a href="/">礼物码</a>
                    <a href="/">防伪查询</a>
                </div>
                <div className="contact">
                    <p className="phone-number">400-100-5678</p>
                    <p className="on-line-time">8:00-18:00 (仅收市话费)</p>
                    <button className="on-line-service">人工服务</button>
                    <p className="subscribe-mi">关注小米</p>
                </div>
            </div>
        </div>
    )
}

export default Footer