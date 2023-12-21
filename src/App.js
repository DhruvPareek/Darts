import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    // State variableshandleTargetScoreChange
    const [playerA, setPlayerA] = useState('A');
    const [playerB, setPlayerB] = useState('B');
    const [targetScore, setTargetScore] = useState(301);
    const [scoreA, setScoreA] = useState(targetScore);
    const [tempScoreA, setTempScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(targetScore);
    const [tempScoreB, setTempScoreB] = useState(0);
    const [turn, setTurn] = useState(0);

    const enterScore = () => {
      if (turn === 0 && scoreA - tempScoreA >= 0) {
          if(scoreA - tempScoreA >= 0){
            setScoreA(prevScoreA => prevScoreA - tempScoreA);
          }else{
            //TO DO BUzzer sound
          }
          setTempScoreA(0);
          setTurn(1);
      } else if(turn === 1 && scoreB - tempScoreB >= 0){
          if(scoreB - tempScoreB >= 0){
            setScoreB(prevScoreB => prevScoreB - tempScoreB);
          }else{
              //TO DO BUzzer sound
          }
          setTempScoreB(0);
          setTurn(0);
      }
    };


    // Handlers for the state variables
    const handleValueAChange = (event) => {
      setPlayerA(event.target.value);
    };
  
    const handleValueBChange = (event) => {
      setPlayerB(event.target.value);
    };

    const handleTargetScoreChange = (event) => {
      setTargetScore(event.target.value);
      setScoreA(event.target.value);
      setScoreB(event.target.value);
      setTempScoreA(0);
      setTempScoreB(0);
      setTurn(0);
    };
  
  const buttonsLow = [
    { id: 1, label: '1' },
    { id: 5, label: '5' },
    { id: 9, label: '9' },
    { id: 13, label: '13' },
    { id: 17, label: '17' },
  ];
  const moreLowButtons = [
    { id: 2, label: '2' },
    { id: 6, label: '6' },
    { id: 10, label: '10' },
    { id: 14, label: '14' },
    { id: 18, label: '18' },
  ];

  const buttonsHigh = [
    { id: 3, label: '3' },
    { id: 7, label: '7' },
    { id: 11, label: '11' },
    { id: 15, label: '15' },
    { id: 19, label: '19' },
  ];

  const moreHighButtons = [
    { id: 4, label: '4' },
    { id: 8, label: '8' },
    { id: 12, label: '12' },
    { id: 16, label: '16' },
    { id: 20, label: '20' },
  ];

  const summingScore = (value) => {
    if (value === 'Bust') {
      // Handle the Bust button click
      // For example, reset temp scores
      if (turn === 0) {
        setTempScoreA(0);
        setTurn(1);
      } else {
        setTempScoreB(0);
        setTurn(0);
      }
    } else {
      // Handle number button clicks
      const score = parseInt(value, 10);
      if (turn === 0) {
        setTempScoreA(tempScoreA + score);
      } else {
        setTempScoreB(tempScoreB + score);
      }
    }
  };  

  return (
    <div className='Add-ons'>
      <input type="text" className='target-score' value={targetScore} onChange={handleTargetScoreChange}/>
    <div className='full-board'>
      <div className='player-scores'>
      <div class="textbox-container">
            <input type="text" class="textbox" value={playerA} onChange={handleValueAChange}/>
            <div class="detail-box">{scoreA}</div>
            <div class="temp-score-left">{(turn==0) ? tempScoreA: null}</div>
        </div>
        <div class="textbox-container">
            <input type="text" class="textbox" value={playerB} onChange={handleValueBChange}/>
            <div class="detail-box">{scoreB}</div>
            <div class="temp-score-right">{(turn==1) ? tempScoreB: ""}</div>
      </div>
      </div>
    <div className='add-score-buttons'>
      <div class="Bust&Clear">
        <button key="Clear" className="Clear-button" onClick={() => {setTempScoreA(0); setTempScoreB(0);}}>
            {"Clear"}
          </button>
        <button key="Bust" className="bust-button" onClick={() => summingScore("Bust")}>
          {"Bust"}
        </button>
      </div>
    <div className="grid-container">
      <div className="button-grid">
        {buttonsLow.map(button => (
          <button key={button.id} className="grid-button" onClick={() => summingScore(button.label)}>
            {button.label}
          </button>
        ))}
      </div>
      <div className="button-grid">
        {moreLowButtons.map(button => (
          <button key={button.id} className="grid-button" onClick={() => summingScore(button.label)}>
            {button.label}
          </button>
        ))}
      </div>
      <div className="button-grid">
        {buttonsHigh.map(button => (
          <button key={button.id} className="grid-button" onClick={() => summingScore(button.label)}>
            {button.label}
          </button>
        ))}
      </div>
      <div className="button-grid">
        {moreHighButtons.map(button => (
          <button key={button.id} className="grid-button" onClick={() => summingScore(button.label)}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
    <div className="enter-button">
      <button key="Enter" className="enter-button" onClick={() => enterScore()}>
          {"Enter"}
        </button>
      </div>

    </div>
    </div>
    </div>

  );
}

export default App;
