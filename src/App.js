import './App.css';
import confetti from 'canvas-confetti';
import React, { useState, useEffect } from 'react';

function App() {
    // State variableshandleTargetScoreChange
    const [playerA, setPlayerA] = useState('A');
    const [playerB, setPlayerB] = useState('B');
    const [playerC, setPlayerC] = useState('C');
    const [playerD, setPlayerD] = useState('D');
    const [targetScore, setTargetScore] = useState(301);
    const [scoreA, setScoreA] = useState(targetScore);
    const [tempScoreA, setTempScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(targetScore);
    const [tempScoreB, setTempScoreB] = useState(0);
    const [scoreC, setScoreC] = useState(targetScore);
    const [tempScoreC, setTempScoreC] = useState(0);
    const [scoreD, setScoreD] = useState(targetScore);
    const [tempScoreD, setTempScoreD] = useState(0);
    const [turn, setTurn] = useState(0);    
    const [imageIndex, setImageIndex] = useState(0);
    const [tempScoreColor, setTempScoreColor] = useState('#ddd'); // default color
    const [threePlayers, setThreePlayers] = useState(false);
    const [fourPlayers, setFourPlayers] = useState(false);

    useEffect(() => {
      setImageIndex(Math.floor((Math.random() * pics.length)));
    }, [imageIndex, setImageIndex]);

    useEffect(() => {
      if(scoreA ===0 || scoreB ===0 || scoreC ===0 || scoreD ===0){
        startConfetti();
      }
    }, [scoreA, scoreB, scoreC, scoreD]);

    const startConfetti = () => {
      confetti({
        particleCount: 400,
        spread: 160,
        origin: { y: 0.5 },
      });
    };

    const enterScore = () => {
      if (turn === 0) {
          if(scoreA - tempScoreA >= 0){
            setScoreA(prevScoreA => prevScoreA - tempScoreA);
            setTurn(1);
            setTempScoreA(0);
          }else{
            // Change color to red
            setTempScoreColor('#FF2D00');
            // Change color back to default after 1 second
            setTimeout(() => setTempScoreColor('#ddd'), 1000);
            setTimeout(() => setTempScoreA(0), 1000);
          }
      } else if(turn === 1){
          if(scoreB - tempScoreB >= 0){
            setScoreB(prevScoreB => prevScoreB - tempScoreB);
            threePlayers ? setTurn(2) : setTurn(0);
            setTempScoreB(0);
          }else{
            setTempScoreColor('red');
            setTimeout(() => setTempScoreColor('#ddd'), 1000);
            setTimeout(() => setTempScoreB(0), 1000);
          }
      } else if (turn === 2){
          if(scoreC - tempScoreC >= 0){
            setScoreC(prevScoreC => prevScoreC - tempScoreC);
            fourPlayers ? setTurn(3) : setTurn(0);
            setTempScoreC(0);
          }else{
            setTempScoreColor('red');
            setTimeout(() => setTempScoreColor('#ddd'), 1000);
            setTimeout(() => setTempScoreC(0), 1000);
          }
      } else if (turn === 3){
          if(scoreD - tempScoreD >= 0){
            setScoreD(prevScoreD => prevScoreD - tempScoreD);
            setTurn(0);
            setTempScoreD(0);
          }else{
            setTempScoreColor('red');
            setTimeout(() => setTempScoreColor('#ddd'), 1000);
            setTimeout(() => setTempScoreD(0), 1000);
          }
      }
    };

    // Handlers for the state variables
    const handleValueAChange = (event) => {
      setPlayerA(event.target.value);
    };
  
    const handleValueBChange = (event) => {
      setPlayerB(event.target.value);
    };

    const handleValueCChange = (event) => {
      setPlayerC(event.target.value);
    };

    const handleValueDChange = (event) => {
      setPlayerD(event.target.value);
    }

    const handleTargetScoreChange = (event) => {
      setTargetScore(event.target.value);
      setScoreA(event.target.value);
      setScoreB(event.target.value);
      setScoreC(event.target.value);
      setScoreD(event.target.value);
      setTempScoreA(0);
      setTempScoreB(0);
      setTempScoreC(0);
      setTempScoreD(0);
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

  const pics = [
    <img src="https://i0.wp.com/www.denverpost.com/wp-content/uploads/2017/05/dbauyfcuiaa4s2n.jpg?w=620&crop=0%2C0px%2C100%2C9999px" width="155" height="193"  alt="Twoods"></img>, 
    <img src="https://i.redd.it/n4ajf8bbl2b51.png" width="215" height="200"  alt="cartmanHit"></img>,
    <img src="https://media.distractify.com/brand-img/1uwkbrl9k/0x0/shane-gillis-racist-1568400677185.jpg" width="400" height="209"  alt="shane"></img>,
    <img src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/ruggs-mugshot-1635975477.jpg" width="160" height="200"  alt="ruggs"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/en/c/c5/Donald_Trump_mug_shot.jpg" width="200" height="200"  alt="theDon"></img>,
    <img src="https://i.ibb.co/nPtkPjv/Screenshot-2023-12-21-at-11-23-04-PM.png" width="524" height="216"  alt="ted"></img>,
    <img src="https://ew.com/thmb/W2wH0tMIlmW4bowCXF3RiSFO8-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/175452__borat_l_1-f06427d9b6194ca3b44fa4548b13d45a.jpg" width="160" height="213"  alt="borat"></img>,
    <img src="https://media.vanityfair.com/photos/54cc018b998d4de83ba45a73/master/w_2560%2Cc_limit/image.jpg" width="307" height="211"  alt="alan"></img>,
    <img src="https://i.insider.com/5f749c9274fe5b0018a8e34f?width=600&format=jpeg&auto=webp" width="293" height="210"  alt="chow"></img>,
    <img src="https://i.redd.it/res06ehsf0p21.jpg" width="568" height="230"  alt="4444"></img>,
    <img src="https://www.usatoday.com/gcdn/presto/2022/01/03/USAT/89f3315e-2eaf-4f0b-ae7f-6d5105d7e17e-AP_Jets_Buccaneers_Football.jpg?crop=2499,2573,x0,y161" width="210" height="212"  alt="AB"></img>,
    <img src="https://i.ytimg.com/vi/Pfu08ULFK88/maxresdefault.jpg" width="385" height="216"  alt="hoff"></img>,
    <img src="https://d.newsweek.com/en/full/798596/tom-brady-son-kiss.jpg?w=1600&h=1200&q=88&f=c66ec92df77e4effc8b2a2128d7eeb0a" width="267" height="200"  alt="tommyB"></img>,
    <img src="https://variety.com/wp-content/uploads/2020/12/AP_20308231955489-e1609266065872.jpg" width="430" height="218"  alt="lilpump"></img>,
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Aaron_Hernandez.JPG" width="167" height="216"  alt="hernansez"></img>,
    <img src="https://i.kym-cdn.com/photos/images/original/002/470/561/1a4" width="123" height="220"  alt="HesComing"></img>,
    <img src="https://i.ibb.co/4tR80Qj/Screenshot-2023-12-22-at-12-00-38-AM.png" width="216" height="216"  alt="sean"></img>,
    <img src="https://i.redd.it/sppimi6xfwh31.jpg" width="293" height="220"  alt="nationalPark"></img>,
    <img src="https://www.usatoday.com/gcdn/-mm-/9f435f2cefcd14f060b384654fda09f5cc2e73ae/c=0-40-3202-1841/local/-/media/2018/03/30/USATODAY/usatsports/ap_north_korea_rodman_91649570-e1513351613650.jpg" width="391" height="220"  alt="dennisUn"></img>,
    <img src="https://i.kym-cdn.com/photos/images/original/002/718/987/9c7.jpg" width="491" height="220"  alt="PresidentGay"></img>,
    <img src="https://pbs.twimg.com/media/GBXWMz_XwAAhLoF.jpg" width="265" height="220"  alt="oppenheimer"></img>,
    <img src="https://media.distractify.com/brand-img/PQVaVk6zg/1200x628/edp445-philadelphia-eagles-1684953601744.jpg" width="420" height="220"  alt="edp"></img>,
    <img src="https://icestork.com/wp-content/uploads/2023/12/Osama-Zyn-Laden-Shirt.jpg" width="220" height="220"  alt="sama"></img>,
    <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_19/3441346/210111-trump-capitol-protest-ew-547p.jpg" width="340" height="220"  alt="jan6th"></img>,    
  ];

  const summingScore = (value) => {
    if (value === 'Bust') {
      // Handle the Bust button click
      // For example, reset temp scores
      if (turn === 0) {
        setTempScoreA(0);
        setTurn(1);
      } else if(turn === 1){
        setTempScoreB(0);
        threePlayers ? setTurn(2) : setTurn(0);
      } else if(turn === 2){
        setTempScoreC(0);
        fourPlayers ? setTurn(3) : setTurn(0);
      } else if(turn === 3){
        setTempScoreD(0);
        setTurn(0);
      }
    } else {
      // Handle number button clicks
      const score = parseInt(value, 10);
      if (turn === 0) {
        setTempScoreA(tempScoreA + score);
      } else if(turn === 1){
        setTempScoreB(tempScoreB + score);
      } else if(turn === 2){
        setTempScoreC(tempScoreC + score);
      } else if(turn === 3){
        setTempScoreD(tempScoreD + score);
      }
    }
  };  

  return (
    <div className='Add-ons'>
      {scoreA===0 && <div className="freeze-screen">Player A Wins</div>}
      {scoreB===0 && <div className="freeze-screen">Player B Wins</div>}
      {scoreC===0 && <div className="freeze-screen">Player C Wins</div>}
      {scoreD===0 && <div className="freeze-screen">Player D Wins</div>}
      {pics[imageIndex]}
      <label className='target-score-label' for="target-score">Target Score</label>
      <input type="text" className='target-score' value={targetScore} onChange={handleTargetScoreChange}/>
    <div className='full-board'>
      <div className='player-scores'>
      <div class="textbox-container">
            <input type="text" class="textbox" value={playerA} onChange={handleValueAChange}/>
            <div class="detail-box">{scoreA}</div>
            <div class="temp-score-left" style={{ color: tempScoreColor }}>
              {(turn === 0) ? tempScoreA : " "}
            </div>
      </div>
        <div class="textbox-container">
            <input type="text" class="textbox" value={playerB} onChange={handleValueBChange}/>
            <div class="detail-box">{scoreB}</div>
            <div class="temp-score-right" style={{ color: tempScoreColor }}>
              {(turn === 1) ? tempScoreB : " "}
            </div>
      </div>
      <textbox-container>
        {!threePlayers && 
        <button onClick={() => setThreePlayers(true)}>
          <div className='plus'>
          +
          </div>
      </button>
        }
          {threePlayers &&      <div class="textbox-container">
            <input type="text" class="textbox" value={playerC} onChange={handleValueCChange}/>
            <div class="detail-box">{scoreC}</div>
            <div class="temp-score-right" style={{ color: tempScoreColor }}>
              {(turn === 2) ? tempScoreC : " "}
            </div></div>}
        </textbox-container>
        <textbox-container>
        {threePlayers && !fourPlayers && 
        <button onClick={() => setFourPlayers(true)}>
          <div className='plus'>
          +
          </div>
        </button>
        }
          {fourPlayers &&      <div class="textbox-container">
            <input type="text" class="textbox" value={playerD} onChange={handleValueDChange}/>
            <div class="detail-box">{scoreD}</div>
            <div class="temp-score-right" style={{ color: tempScoreColor }}>
              {(turn === 3) ? tempScoreD : " "}
            </div></div>}
        </textbox-container>
    </div>
    <div className='add-score-buttons'>
      <div class="Bust&Clear">
        <button key="Clear" className="Clear-button" onClick={() => {setTempScoreA(0); setTempScoreB(0); setTempScoreC(0); setTempScoreD(0);}}>
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
