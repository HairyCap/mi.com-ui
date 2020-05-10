import React from 'react'
import './productCard.css'

const ProductCard = ({ title, description, price, prePrice }) => {
    const pricetag = prePrice ?
        <p><span class="price">{price} </span><span className="prePrice">{prePrice}</span></p> :
        <p class="price">{price}</p>
    return (
        <a href="/" class="productCard">
            <img src="https://unsplash.it/160/160" alt={description}></img>
            <p class="title">{title}</p>
            <p class="description">{description}</p>
            {pricetag}
        </a>
    )
}

export default ProductCard