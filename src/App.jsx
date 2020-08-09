/* eslint-disable */
import React, { useState, useEffect }from 'react'
import Board from './components/board'
import Gameover from './components/gameover'
import initializeDeck from './deck'


export default function App() {
  const [cards,setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [score, setScore] = useState(0);
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [turns, setTurns] = useState(0)
  const [points, setPoints] = useState(0)

  
  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())  

  }, [])
  useEffect(() => {
    preloadImages()
  })

  useEffect(() => {
    checkScore();
  }, [score])

  // useEffects(() =>{
  //  saveGame()
  // }, [cards])

  useEffect(() => {
  const resizeListener = window.addEventListener('resize', resizeBoard)

  return () => window.removeEventListener('resize', resizeListener)

  })

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    }
     else if (sameCardClicked(id)){
      setDisabled(false)
     } else {
      setFlipped([flipped[0], id])     
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        setTurns(turns => turns + 1)
        updateScore(score, checkScore);
        resetCards()

       
      }else {
        setTurns(turns => turns + 1)
        setTimeout(resetCards, 2000)
      }

    }
  }
  const preloadImages = () => {
    cards.map((card) =>{
      const src = `/img/${card.type}.png`
      new Image().src = src
    })
  }
  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const updateScore = (score, callback) => {
    let newScore = score + 1;
    setScore(score + 1);
    callback(newScore);
  }
  const checkScore = (score) => {
    if (score>7) {
      setPoints(points + 1)
      setTimeout(newGame, 3000);
    }
  }

  const newGame = () => {
    setSolved([]);
    setCards(initializeDeck());
    setFlipped([]);
    setDisabled(false);
    setTurns(0);
  }

  // const saveGame = () => {
  //   setSolved([]);
  //   setCards(initializeDeck());
  //   setFlipped([]);
  //   setDisabled(false);
  //   setTurns(0);
  // }




  const sameCardClicked = (id) => flipped.includes(id) 
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  }
  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    
    ),
    )
  }

  return (

    

 
    <div>
      <h1>Memory Card Game</h1>
      <h2>Click the cards to  play</h2>
      <h3> You took {turns} turns</h3>
      <Gameover 
      newGame={newGame}
      points={points}
      />
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        solved={solved}
        handleClick={handleClick}
        disabled={disabled}
      />
    </div>
  )
}
