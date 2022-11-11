import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cartItems, setCartItems] = useState([])
  const [price, setPrice] = useState(0.00)
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  function addtoCart(item) {
    setCartItems([...cartItems, item])
  }
   function total(item) {
     setPrice(price + item.price)
   }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item = {item} addtoCart = {addtoCart} total = {total}/> //individual names are outputted
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (<p>{item.name}</p>))}
        <h4>Total</h4>
        {Math.round(price * 100)/100}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
