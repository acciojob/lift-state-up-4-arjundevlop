



import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
 
function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 }
  ]);
 
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
 
  const handleAddItem = () => {
    const newId = cartItems.length + 1;
    const newItem = { id: newId, name: itemName, price: parseInt(itemPrice) };
    setCartItems([...cartItems, newItem]);
    setItemName("");
    setItemPrice("");
  };
 
  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };
 
  const handlePriceChange = (event) => {
    setItemPrice(event.target.value);
  };
 
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
 
  return (
    <div class="parent">
      <h1>Parent Component</h1>
      <div>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={handleNameChange}
        />
        <label htmlFor="itemPrice">Item Price:</label>
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={handlePriceChange}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ChildComponent
        cartItems={cartItems}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
 
export default App;
