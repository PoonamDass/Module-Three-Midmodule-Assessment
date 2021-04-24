import React from "react";

const Cart = ({ cart,subTotal, tax, total }) => {
  return (
    <section>
      <h1>Cart</h1>

      <ul className="items">
        {cart.map((item) => {
          return (
            <li>
              {item.name}: ${item.price.toFixed(2)}
            </li>
          );
        })}
      </ul>
      <h2>Subtotal: {subTotal} </h2>
      <h2>Tax: {tax}</h2>
      <h2>Total: {total} </h2>

    </section>
  );
};

export default Cart;
