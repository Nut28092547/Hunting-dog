import React, { useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState(0);
  const update = () => {
    setCounter(counter+5);
  }
  const decrease = () => {
    setCounter(counter-5);
  }
  return (
    <div>
      <h2>หมาล่าขี้แตก</h2>
      <hr />
      <p>ราคาไม้ละ: {counter} บาท
      <button onClick={update}>+</button>
      <button onClick={decrease}>-</button>
      </p>
      <p>5ไม้: {counter*5} บาท
      </p>
      <p>10ไม้: {counter*10} บาท
      </p>
      <p>20ไม้: {counter*20} บาท
      </p>
      <p>30ไม้: {counter*30} บาท
      </p>
    </div>
  )
}

export default App