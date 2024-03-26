import styles from './App.module.css'

import { useState } from 'react'

import Player from './components/Player/Player'
import GameTable from './components/Gameboard/GameTable'

import logo from './assets/LOGO.png'
import { WINNING_COMBINATIONS } from './WINNING_COMBINATIONS'

const INPUT_DATA = {
  player1: {
    playerName: 'Player 1',
    playerSymbol: 'x'
  },
  player2: {
    playerName: 'Player 2',
    playerSymbol: 'O'
  },
  toggle: ''
}

const DEFAULT_GAMETABLE = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

// auxiliary function that adds changes to the game board (when 1 of the players click on some square on gameBoard)
const setGameTable = data => {
  const gameTable = [...DEFAULT_GAMETABLE.map(item => [...item])] // deep cloning

  for (const item of data) {
    const {curSymbol, square} = item
    const {row, col} = square
    gameTable[row][col] = curSymbol
  }

  return gameTable
}


function App() {

  let playerData = structuredClone(INPUT_DATA)

  const [player, setPlayer] = useState(playerData) // player data (current symbol, name....))

  const [activePlayer, setActivePlayer] = useState('player1') // current active Player (in this moment)

  const [gameSquareData, setGameSquareData] = useState([]) // logs of all clicks with playerName, symbol etc

// handling player clicks on gameTable cells
  const getDataOnClick = (rowIndex, colIndex) => {
   
    setActivePlayer(() => activePlayer === 'player1' ? 'player2' : 'player1')

    setGameSquareData(prevState => {
      // let namePlayer = player[activePlayer].playerName
      let symbolPlayer = player[activePlayer].playerSymbol
      let playerTurnsData = [...prevState, { curSymbol: symbolPlayer, square: { row: rowIndex, col: colIndex } }]

      return playerTurnsData
    })
  }

  console.log(gameSquareData)

  const gameTable = setGameTable(gameSquareData) // re-run every time the state changes

  const clickHandlerReset = () => setPlayer(() => playerData) // reset data on button 'reset' click

  return (
    <main className={styles.wrapper}>

      <img className={styles.logo__img} src={logo} alt="Game logo" title='Main game logo' />

      {/* main game container */}
      <div className={styles['game-wrapper']}>

        <div className={styles.game__players}>
          
          <Player toggleValue={player.toggle} id='player1' name='Player 1' symbol='X' player={player.player1} setPlayer={setPlayer} />
          <Player toggleValue={player.toggle} id='player2' name='Player 2' symbol='O' player={player.player2} setPlayer={setPlayer} />

        </div>
        {/* <PlayerLine /> */}

        <GameTable gameTable={gameTable} onSquareClick={getDataOnClick} />


        <button onClick={clickHandlerReset} >Reset</button>
      </div>
      {/* end main conatiner */}

    </main>
  )
}

export default App
