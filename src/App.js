import "./styles.css";
import React, { useState } from "react";
import data from "./data.json";
export default function App() {
  const [text, setText] = useState("");
  const [add, setAdd] = useState([]);
  
  
  const handleAdd = () => {
    if (text.length > 0) {
      let item = [{ index: Math.random(), isEditable: false, text }, ...add];
      setAdd(item);
    }
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleDelete = (index) => {
    console.log("id", index);
    let filtered = add.filter((item) => item.index !== index);
    setAdd(filtered);
  };
 
  return (
    <div className="main">
      <h1> Sticky Notes</h1>
      <div className="main-input">
        <input
          type="text"
          placeholder="notes..."
          onChange={(e) => handleChange(e)}
          value={text}
        />
        <button type="submit" onClick={handleAdd}>
          ADD
        </button>
        {add &&
          add.map((item) => {
            return (
              <li key={item.index}>
                {item.text}{" "}
                <button onClick={() => handleDelete(item.index)}>delete</button>
                
               
              </li>
              
            );
          })}
          
      </div>
    </div>
  );
}
