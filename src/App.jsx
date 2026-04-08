import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

let country;
const randomNumber = Math.random() * 6

if(randomNumber < 1) {
  country = 'argentina';
} else if(randomNumber < 2) {
  country = 'england';
} else if(randomNumber < 3) {
  country = 'france';
} else if(randomNumber < 4) {
  country = 'germany';
} else if(randomNumber < 5) {
  country = 'italy';
} else {
  country = 'spain';
}

function App() {
  const [isDataReady, setIsDataReady] = useState(localStorage.getItem('leagueData') !== null);
  const [isDataComplete, setIsDataComplete] = useState(-1);
  const [count, setCount] = useState(0);
  //IndexArray needs to contain 10 random numbers representing teams, and it needs to be populated for the app to render
  const [indexArray, setIndexArray] = useState([]);
  const [clickedIndices, setClickedIndices] = useState([]);
  const [cardsHiddenClass, setCardsHiddenClass] = useState('');
  const [scoreAnimationClass, setScoreAnimationClass] = useState('');
  const [highScoreAnimationClass, setHighScoreAnimationClass] = useState('');
  const [highestScore, setHighestScore] = useState(0);

  console.log(country);

  async function fetchData() {
    const myHeaders = new Headers();
    myHeaders.append("x-apisports-key", '31479143eba972bf952b69768313805c');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      // Bundesliga
      const germany = await fetch("https://v3.football.api-sports.io/teams?league=78&season=2024", requestOptions)
      const gerData = await germany.json();

      // Liga Profesional Argentina
      const argentina = await fetch("https://v3.football.api-sports.io/teams?league=128&season=2024", requestOptions);
      const argData = await argentina.json();

      // Ligue 1
      const france = await fetch("https://v3.football.api-sports.io/teams?league=61&season=2024", requestOptions);
      const fraData = await france.json();
      
      // Serie A
      const italy = await fetch("https://v3.football.api-sports.io/teams?league=135&season=2024", requestOptions);
      const itaData = await italy.json();

      // La Liga
      const spain = await fetch("https://v3.football.api-sports.io/teams?league=140&season=2024", requestOptions);
      const spaData = await spain.json();

      // Premier League
      const england = await fetch("https://v3.football.api-sports.io/teams?league=39&season=2024", requestOptions);
      const engData = await england.json();

      return (
        {
          germany: gerData,
          argentina: argData,
          france: fraData,
          italy: itaData,
          spain: spaData,
          england: engData
        }
      )
    } catch {
      console.log('Error fetching data');
    }
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

  useEffect(() => {
    if(!isDataReady) {
      const result = fetchData();
      result.then(result => {
        window.leagueData = result;
        // Check whether all data is available, use only in production
        setIsDataComplete(Object.entries(window.leagueData)
          .findIndex((element) => {
            element[1].response.length === 0;
          }));
        localStorage.setItem('leagueData', JSON.stringify(window.leagueData));
        setIsDataReady(true);
      });
    } else {
      window.leagueData = JSON.parse(localStorage.getItem('leagueData'));
      console.log(Object.entries(window.leagueData)
        .findIndex((element) => {
          console.log(element[1].response.length);
          element[1].response.length === 0;
        }));
      // Check whether all data is available, use only in production
      setIsDataComplete(Object.entries(window.leagueData)
        .findIndex((element) => {
          element[1].response.length === 0;
        }));
      setIndexArray(selectTenTeamsAtRandom(window.leagueData[country].response.length));
    }
  }, [isDataReady])

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

  function handleCardClickZero() {
    if(!clickedIndices.includes(indexArray[0])) {
      setCardsHiddenClass('hidden');
      setCount(count + 1);
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[0]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[1]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[2]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[3]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[4]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[5]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[6]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[7]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[8]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
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
      setScoreAnimationClass('animate')
      if(count + 1 > highestScore) {
        setHighestScore(count + 1);
        setHighScoreAnimationClass('animate')
      }
      setTimeout(() => {
        setClickedIndices([...clickedIndices, indexArray[9]]);
        setIndexArray(shuffle(indexArray));
        setTimeout(() => {
          setCardsHiddenClass('');
          setScoreAnimationClass('')
          if(count + 1 > highestScore) {
            setHighScoreAnimationClass('')
          }
        }, 250)
      }, 250)
    } else {
      setCount(0);
      setClickedIndices([]);
    }
  }
  
  // Use only in production
  if(isDataComplete > -1) {
    return (
      <>
        <p>Daily number of API requests exceeded.</p>
        <p>Please try again tomorrow.</p>
      </>
    )
  }
  if(indexArray.length > 0 && highestScore == 10) {
    return (
      <>
        <div className='first-section'>
          <div id='title'>Memory Game</div>
          <div className='align-left'>Pick each football team ONLY once. If you pick them all, you win!</div>
          <div className='align-left'>Highest score: <span className={highScoreAnimationClass}>{highestScore}</span></div>
          <div className='align-left'>Current score: <span className={scoreAnimationClass}>{count}</span></div>
          <div className='league-name'>
            {window.leagueData[country].parameters.league == '78' && 'Bundesliga'}
            {window.leagueData[country].parameters.league == '128' && 'Liga Profesional Argentina'}
            {window.leagueData[country].parameters.league == '61' && 'Ligue 1'}
            {window.leagueData[country].parameters.league == '135' && 'Serie A'}
            {window.leagueData[country].parameters.league == '140' && 'La Liga'}
            {window.leagueData[country].parameters.league == '39' && 'Premier League'}
          </div>
        </div>
        <div>
          <div id='winning-message'>Congratulations! You won the game</div>
          <button id='play-again-button'
          onClick={() => {
            window.location.reload();
          }}>Play again
          </button>
        </div>
      </>
    )
  } else if(indexArray.length > 0) {
    return (
      <>
        <div className='first-section'>
          <div id='title'>Memory Game</div>
          <div className='align-left'>
            <p>Pick each football team ONLY once.</p> 
            <p>If you pick them all, you win!</p>
          </div>
          <div className='align-left'>Highest score: <span className={highScoreAnimationClass}>{highestScore}</span></div>
          <div className='align-left'>Current score: <span className={scoreAnimationClass}>{count}</span></div>
          <div className='league-name'>
            {window.leagueData[country].parameters.league == '78' && 'Bundesliga'}
            {window.leagueData[country].parameters.league == '128' && 'Liga Profesional Argentina'}
            {window.leagueData[country].parameters.league == '61' && 'Ligue 1'}
            {window.leagueData[country].parameters.league == '135' && 'Serie A'}
            {window.leagueData[country].parameters.league == '140' && 'La Liga'}
            {window.leagueData[country].parameters.league == '39' && 'Premier League'}
          </div>
        </div>
        <div className="card-grid">
          <Card
          onClick={handleCardClickZero}
          src={window.leagueData[country].response[indexArray[0]].team.logo}
          text={window.leagueData[country].response[indexArray[0]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickOne}
          src={window.leagueData[country].response[indexArray[1]].team.logo}
          text={window.leagueData[country].response[indexArray[1]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickTwo}
          src={window.leagueData[country].response[indexArray[2]].team.logo}
          text={window.leagueData[country].response[indexArray[2]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickThree}
          src={window.leagueData[country].response[indexArray[3]].team.logo}
          text={window.leagueData[country].response[indexArray[3]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickFour}
          src={window.leagueData[country].response[indexArray[4]].team.logo}
          text={window.leagueData[country].response[indexArray[4]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickFive}
          src={window.leagueData[country].response[indexArray[5]].team.logo}
          text={window.leagueData[country].response[indexArray[5]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickSix}
          src={window.leagueData[country].response[indexArray[6]].team.logo}
          text={window.leagueData[country].response[indexArray[6]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickSeven}
          src={window.leagueData[country].response[indexArray[7]].team.logo}
          text={window.leagueData[country].response[indexArray[7]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickEight}
          src={window.leagueData[country].response[indexArray[8]].team.logo}
          text={window.leagueData[country].response[indexArray[8]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
          <Card
          onClick={handleCardClickNine}
          src={window.leagueData[country].response[indexArray[9]].team.logo}
          text={window.leagueData[country].response[indexArray[9]].team.name}
          hiddenStatus={cardsHiddenClass}
          >
          </Card>
        </div>
      </>
    )
  } else {
    return (
      <p>Loading data, please wait...</p>
    )
  }
}

export default App
