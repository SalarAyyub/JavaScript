import './App.css';
import icon from './images/icon-dice.svg'
import pattern from './images/pattern-divider-desktop.svg'
import { useEffect, useState } from 'react';


function App() {

  const [advice, setAdvice] = useState('')

  function fetchA(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => setAdvice(data.slip))

  }
  useEffect(() => {
    fetchA()
  }, [])


  return (

    <div className="container">
    <div className="card">
        <h1 className="advice-id" id="advice-id">#Advice: {advice.id}</h1>
        <p className="advice-text" id="advice">{advice.advice}</p>
        <img src={pattern} alt="" className="divider"/>

        <button className="dice-btn" id="dice" onClick={fetchA}>
          <img src={icon} alt=""/>
        </button>
    </div>
</div>
  );
}

export default App;
