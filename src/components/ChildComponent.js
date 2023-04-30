import React from "react";
import './../styles/App.css';
 
function ChildComponent(props) {
  return (
    <div class="child">
      <h2>Child Component</h2>
      <ul>
        {props.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => props.handleRemoveItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default ChildComponent;