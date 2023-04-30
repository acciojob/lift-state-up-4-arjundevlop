
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [itemName, setitemName] = useState("");
  const [itemPrice, setitemPrice] = useState("");
  const [itemData, setitemData] = useState([]);

  const addItem = ()=>{
    setitemData([...itemData,{id:itemData.length+1,item:itemName,price:itemPrice}])
    setitemName("");
    setitemPrice("");

  }

  const removeItem = (id)=>{
    const updatedArr = itemData.filter((item)=>{
      return item.id!==id
    })
    setitemData(updatedArr);

  }

  return (
    <div>
        <div className="parent">
          <h1>Parent Component</h1>
          <label>Item Name:</label>
          <input type="text" id="itemName" value={itemName} onChange={(e)=>{setitemName(e.target.value)}} />
          <label>Item Price:</label>
          <input type="number" id="itemPrice" value={itemPrice} onChange={(e)=>{setitemPrice(e.target.value)}} />
          <button onClick={()=>{addItem()}}>Add Item</button>
        </div>
        <div className="child">
        <h2>Child Component</h2>
        <ul>
          {itemData.map((elem)=>{
            return <li>{elem.item} - ${elem.price} <button onClick={()=>{removeItem(elem.id)}}>Remove</button></li>
            
          })}
        </ul>

        </div>
    </div>
  )
}

export default App
