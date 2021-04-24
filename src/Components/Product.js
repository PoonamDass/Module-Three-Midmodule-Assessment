import React from "react"

const Product = ({name, price, img, description, addToCart}) =>{
    return (
        <li>
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <button onClick= {()=>addToCart({name,price})}>Add To Cart</button>
            <br/>
            <br/>
            <img src={img} alt="items"/>
            <p>{description}</p>


        </li>
    )
}

export default Product