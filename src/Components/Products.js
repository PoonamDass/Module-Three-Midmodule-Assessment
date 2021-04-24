import React from "react"
import Product from "./Product"
import "../Styles/Products.css"

const  Products= ({productData, addToCart}) =>{
    const items = productData.map(item=>{
        return <Product addToCart={addToCart} name = {item.name} price={item.price} img={item.img} description={item.description} key={item.id}/>
    })

    return (
        <section className="Products">
            <h1>My Garage Sale</h1>


            <ul>
                {items}
            </ul>

        </section>
    )



}

export default Products