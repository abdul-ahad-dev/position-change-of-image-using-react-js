import { useState } from 'react';
import './App.css';
import model from './assets/model.jpg';
import sample from './assets/sample.png';
import './App.css';

function App() {
  const [top, setTop] = useState(80)
  const [right, setRight] = useState(400)

  const incrementTop = () => {
    setTop(top - 1);
  };
  const incrementBottom = () => {
    setTop(top + 1);
  };
  const incrementLeft = () => {
    setRight(right + 1);
  };
  const incrementRight = () => {
    setRight(right - 1);
  };

  return (
    <>
      <div className='container'>
        <img className='model' src={model} style={{ top: `${top}px`, right: `${right}px` }} alt="" />
        <img className='sample' src={sample} alt="" />
      </div>
      <div className="btns flex justify-center gap-3 px-3 py-2">
        <button onClick={incrementTop}>Top</button>
        <button onClick={incrementBottom}>Bottom</button>
        <button onClick={incrementLeft}>Left</button>
        <button onClick={incrementRight}>Right</button>
      </div>
    </>
  )
}

export default App
