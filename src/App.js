import React, {useState, useEffect } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "../Table";
import Nasa from "./Nasa";
     

export default function App() {
  const [count, setCount] = useState(0)

  function increase() {
   setCount(count + 1)
   console.log(count)

  };
  function decrease() {
    if(count == 0) return;
    setCount(count - 1)
    console.log(count)

  };
  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);


  return (
    <div>
      <h1 className="text-center">Hello Boy!</h1>
      <div className="text-center">
        { count }
      </div>
      <div className="text-center">
      <button className="btn btn-primary" onClick={ increase }>Click Me</button>
      </div>   
      <br></br>
      <div className="text-center">   
      <button className="btn btn-success" onClick={ decrease }>Click Me</button>
      </div>
      <Nasa />
    </div>
  );
}
