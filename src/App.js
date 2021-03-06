import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    if (count < 0){ 
      setText(data.slice(0,1))
    }
    else{
      setText(data.slice(0,count))
    }
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
      <label htmlFor="amount">
      paragraphs:
      </label>
      <input type="number" id='amount' name="amount" value={count} onChange={(e)=>{setCount(e.target.value)}} />
      <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
      {
        text.map((item, index)=>{
          return <p key={index}>{item}</p>
        })
      }
      </article>
    </section>
  );
}

export default App;
