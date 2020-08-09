
import React from "react"
const Gameover = props => ( 
      <div>
      
          <button className="restart" onClick={() => props.newGame()}>
            Save Game
          </button>
          <button className="restart" onClick={() => props.newGame()}>
            Restore Game
          </button>
          <button className="restart" onClick={() => props.newGame()}>
            Restart Game
          </button>

<div className="points">Games Won: {props.points} </div> 
 
 </div>
);          
             
        

  
export default Gameover




// import React from 'react'

// const GameOver = ({ restartGame }) => (
// <div className="justify-center">
// <h1>Game Over!</h1>
// <h3>If you enjoyed playing this game, follow me @mary for more...</h3>
// <button className="restart-button" onClick={restartGame}>Restart Game</button>
// </div>
// );
  
// export default GameOver;