import React from 'react'
import './promoCard.css'

const PromoCard = props => {
        if(props.large){
            return <a href="/"><img class="promo" src="https://unsplash.it/234/614" alt="propmo"></img></a>
        }else{
            return <a href="/"><img class="promo" src="https://unsplash.it/234/300" alt="propmo"></img></a>
        }
}

export default PromoCard