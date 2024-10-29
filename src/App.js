import './App.css';
import { useState } from 'react'
function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () =>{
    setCounter(counter + 1)
    //  setCounter((prevCounter) => prevCounter + 1)
    //  setCounter((prevCounter) => prevCounter + 1)
    //  setCounter((prevCounter) => prevCounter + 1)
    //  setCounter((prevCounter) => prevCounter + 1)


  }

  const remoValue = () =>{
    if (counter > 0) {
      setCounter(counter - 1)
    //  setCounter((prevCounter)=> prevCounter - 4)
    }
  }
  return (
    <div className="App">
      <h1>Quick react course</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>{' '}

      <button onClick={remoValue}>Remove Value</button>
      <p>Total is: {counter}</p>

    </div>
  );
}

export default App;
