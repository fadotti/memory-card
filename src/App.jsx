import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

const myHeaders = new Headers();
myHeaders.append("x-apisports-key", '31479143eba972bf952b69768313805c');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const leagueData = {
  germany: null,
  france: null,
  italy: null,
  spain: null,
  england: null,
  argentina: null
}

let teamList;

if (localStorage.getItem('leagueData') !== null) {
  const leagueData = JSON.parse(localStorage.getItem('leagueData'));
  window.leagueData = leagueData;
  console.log(window.leagueData);
  teamList = [...leagueData.argentina.response];
} else {
  // Bundesliga

  const germany = fetch("https://v3.football.api-sports.io/teams?league=78&season=2024", requestOptions)
    .then(response => response.text())
    .then(result => {
      leagueData.germany = JSON.parse(result);
    })
    .catch(error => console.log('error', error));

  // Copa Argentina

  const argentina = fetch("https://v3.football.api-sports.io/teams?league=128&season=2024", requestOptions)
    .then(response => response.text())
    .then(result => {
      leagueData.argentina = JSON.parse(result);
    })
    .catch(error => console.log('error', error));

  // Ligue 1

  const france = fetch("https://v3.football.api-sports.io/teams?league=61&season=2024", requestOptions)
    .then(response => response.text())
    .then(result => {
      leagueData.france = JSON.parse(result);
    })
    .catch(error => console.log('error', error));

  // Serie A

  const italy = fetch("https://v3.football.api-sports.io/teams?league=135&season=2024", requestOptions)
    .then(response => response.text())
    .then(result => {
      leagueData.italy = JSON.parse(result);
    })
    .catch(error => console.log('error', error));

  // La Liga

  const spain = fetch("https://v3.football.api-sports.io/teams?league=140&season=2024", requestOptions)
    .then(response => response.text())
    .then(result => {
      leagueData.spain = JSON.parse(result);
    })
    .catch(error => console.log('error', error));

  // Premier League

  const england = fetch("https://v3.football.api-sports.io/teams?league=39&season=2024", requestOptions)
    .then(response => response.text())
    .then(result => {
      leagueData.england = JSON.parse(result);
    })
    .catch(error => console.log('error', error));

  Promise.all([germany, argentina, france, italy, spain, england])
    .then(() => {
      window.leagueData = leagueData;
      localStorage.setItem('leagueData', JSON.stringify(leagueData));
      teamList = [...leagueData.argentina.response];
    })
  }

function shuffle(array) {
  let arrayCopy = [...array];
  let output = [];
  while(output.length < array.length) {
    const indexToRemove = Math.floor(Math.random() * arrayCopy.length);
    output.push(arrayCopy[indexToRemove]);
    arrayCopy.splice(indexToRemove, 1);
  }
  return output
}

function selectTenTeamsAtRandom(arrayLength) {
  let indices = [];
  for(let i = 0; i < (arrayLength - 1); i++) {
    indices.push(i);
  }
  let output = [];
  while(output.length < 10) {
    const teamIndex = Math.floor(Math.random() * indices.length);
    output.push(indices[teamIndex]);
    indices.splice(teamIndex, 1);
  }
  return output
}

// console.log(teamList)
// console.log(selectTenTeamsAtRandom(teamList))

function App() {
  const [count, setCount] = useState(0)
  const [indexArray, setIndexArray] = useState(selectTenTeamsAtRandom(teamList.length));
  const [clickedIndices, setClickedIndices] = useState([]);
  const [cardsHiddenClass, setCardsHiddenClass] = useState('');
  const [highestScore, setHighestScore] = useState(0);

  function handleCardClickZero() {
    if(!clickedIndices.includes(indexArray[0])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[0]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickOne() {
    if(!clickedIndices.includes(indexArray[1])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[1]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickTwo() {
    if(!clickedIndices.includes(indexArray[2])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[2]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickThree() {
    if(!clickedIndices.includes(indexArray[3])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[3]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickFour() {
    if(!clickedIndices.includes(indexArray[4])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[4]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickFive() {
    if(!clickedIndices.includes(indexArray[5])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[5]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickSix() {
    if(!clickedIndices.includes(indexArray[6])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[6]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickSeven() {
    if(!clickedIndices.includes(indexArray[7])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[7]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickEight() {
    if(!clickedIndices.includes(indexArray[8])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[8]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  function handleCardClickNine() {
    if(!clickedIndices.includes(indexArray[9])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      if(count + 1 > highestScore) setHighestScore(count + 1);
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[9]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }

  return (
    <>
      <div className='first-section'>
        <div id='title'>Memory Game</div>
        <div className='align-left'>Pick each football team ONLY once. If you pick them all, you win!</div>
        <div className='align-left'>Highest score: <span>{highestScore}</span></div>
        <div className='align-left'>Current score: <span>{count}</span></div>
        <div className='league-name'>Copa Argentina</div>
      </div>
      <div className="card-row">
        <Card
        onClick={handleCardClickZero}
        src={window.leagueData.argentina.response[indexArray[0]].team.logo}
        text={window.leagueData.argentina.response[indexArray[0]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
        <Card
        onClick={handleCardClickOne}
        src={window.leagueData.argentina.response[indexArray[1]].team.logo}
        text={window.leagueData.argentina.response[indexArray[1]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
        <Card
        onClick={handleCardClickTwo}
        src={window.leagueData.argentina.response[indexArray[2]].team.logo}
        text={window.leagueData.argentina.response[indexArray[2]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
        <Card
        onClick={handleCardClickThree}
        src={window.leagueData.argentina.response[indexArray[3]].team.logo}
        text={window.leagueData.argentina.response[indexArray[3]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
        <Card
        onClick={handleCardClickFour}
        src={window.leagueData.argentina.response[indexArray[4]].team.logo}
        text={window.leagueData.argentina.response[indexArray[4]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
      </div>
      <div className="card-row">
        <Card
        onClick={handleCardClickFive}
        src={window.leagueData.argentina.response[indexArray[5]].team.logo}
        text={window.leagueData.argentina.response[indexArray[5]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
        <Card
        onClick={handleCardClickSix}
        src={window.leagueData.argentina.response[indexArray[6]].team.logo}
        text={window.leagueData.argentina.response[indexArray[6]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
        <Card
        onClick={handleCardClickSeven}
        src={window.leagueData.argentina.response[indexArray[7]].team.logo}
        text={window.leagueData.argentina.response[indexArray[7]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
        <Card
        onClick={handleCardClickEight}
        src={window.leagueData.argentina.response[indexArray[8]].team.logo}
        text={window.leagueData.argentina.response[indexArray[8]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
        <Card
        onClick={handleCardClickNine}
        src={window.leagueData.argentina.response[indexArray[9]].team.logo}
        text={window.leagueData.argentina.response[indexArray[9]].team.name}
        hiddenStatus={cardsHiddenClass}
        >
        </Card>
      </div>
    </>
  )
}

export default App
