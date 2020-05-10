import React from 'react'
import './info.css'

const Info = props => {
    return (
        <div className="info">
            <div className="info-container">
                <div className="info-logo">
                    <img src="https://unsplash.it/57/57"></img>
                </div>
                <div class="info-links">
                    <div className="mi-links">
                        <a href="/">小米商城</a>
                        <span className="sep"> | </span><a href="/">MIUI</a>
                        <span className="sep"> | </span><a href="/">米家</a>
                        <span className="sep"> | </span><a href="/">米聊</a>
                        <span className="sep"> | </span><a href="/">多看</a>
                        <span className="sep"> | </span><a href="/">游戏</a>
                        <span className="sep"> | </span><a href="/">政企服务</a>
                        <span className="sep"> | </span><a href="/">小米天猫店</a>
                        <span className="sep"> | </span><a href="/">小米集团隐私政策</a>
                        <span className="sep"> | </span><a href="/">小米公司儿童信息保护规则</a>
                        <span className="sep"> | </span><a href="/">小米商城隐私政策</a>
                        <span className="sep"> | </span><a href="/">小米商城用户协议</a>
                        <span className="sep"> | </span><a href="/">问题反馈</a>
                        <span className="sep"> | </span><a href="/">Select Location</a>
                    </div>
                    <div className="about-links">
                    <p><a href="/">© mi.com</a> 京ICP证110507号 <a href="/">京ICP备10046444号</a><a href="/">京公网安备11010802020134号</a><a href="/">京网文[2020]0276-042号</a><br/>
                    <a href="/">（京）网械平台备字（2018）第00005号</a><a href="/">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a><a href="/">营业执照</a><a href="/">医疗器械质量公告</a><br/>
                    <a href="/">增值电信业务许可证</a>网络食品经营备案（京）【2018】WLSPJYBAHF-12  <a href="/">食品经营许可证</a><br/>
                    违法和不良信息举报电话：185-0130-1238 <a href="/">知识产权侵权投诉</a> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info