import "./App.css";
import React , {Component} from "react"
import productData from "./data/productData"
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import formatPrice from "./helpers/formatPrice"


class App extends Component {

  
  state = {cart : []}

  addToCart = (item) =>{
    this.setState(prevState =>{
      return {
        cart: [...prevState.cart, item ]
      }
    })
 
  } 



  render (){
    const {cart} =this.state

    let subTotal=0
    cart.forEach(item=>{
      return subTotal+=item.price
    })
    
    let tax = (subTotal * .05)

    let total = subTotal + tax
    
    return  (
    <div>
      <Products productData = {productData} addToCart={this.addToCart}/>
      <Cart cart={cart} subTotal={formatPrice(subTotal)} tax = {formatPrice(tax)} total={formatPrice(total)}/>
      <Checkout total={formatPrice(total)}/>

    </div>  
    )
  }
}
export default App;
