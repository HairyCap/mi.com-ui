import React from 'react'
import ProductCard from '../productCard/productCard'
import PromoCard from '../promoCard/promoCard'
import './brickBox.css'
import { FiChevronRight } from "react-icons/fi";

const damiCard = {
    title: "小米「小爱老师」",
    description: "英语提分利器",
    price: "429元起",
    prePrice: "499元"
  }

const damArr = new Array(8).fill(damiCard);

const BrickBox = ({title}) => {
    return (
            <div className="brickBox">
                <a className="baner" href="/">
                    <img src="https://unsplash.it/1226/120" alt="baner"></img>
                </a>
                <div className="boxTitle">
                    <span>{title}</span>
                    <span className="titlespace"></span>
                    <a href="/"><span>查看全部 <FiChevronRight size="1em"/></span></a>
                </div>
                <div className="boxMain">
                    <div className="promoCards">
                        <PromoCard large></PromoCard>
                    </div>
                    <div className="productCards">
                        {damArr.map(c=> <ProductCard { ...c }/>)}
                    </div>
                </div>
            </div>
    )
}



export default BrickBox