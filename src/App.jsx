import styles from './App.module.css'

import { useState } from 'react'

import Player from './components/Player/Player'
import GameTable from './components/Gameboard/GameTable'
import PopUp from './components/PopUp/PopUp'
import Log from './components/Log/Log'
import GameStats from './components/GameStats/GameStats'

import logo from './assets/LOGO.png'
import { WINNING_COMBINATIONS } from './WINNING_COMBINATIONS'

const INPUT_DATA = {
  player1: {
    playerName: 'Player 1',
    playerSymbol: 'X',
    playerWins: 0
  },
  player2: {
    playerName: 'Player 2',
    playerSymbol: 'O',
    playerWins: 0
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
    const { curSymbol, square } = item
    const { row, col } = square
    gameTable[row][col] = curSymbol
  }

  return gameTable
}

// auxiliary function that chek winnig combinations on gameTable
const checkWinningCombinations = (gameTable, gameData) => {

  let winner

  for (const item of WINNING_COMBINATIONS) {

    let firstCell = gameTable[item[0].row][item[0].column]
    let secondtCell = gameTable[item[1].row][item[1].column]
    let thirdCell = gameTable[item[2].row][item[2].column]

    if (firstCell && firstCell === secondtCell && firstCell === thirdCell) {
      winner = gameData[gameData.length - 1].curName

    }

  }

  return winner //if winner = true (symbol for example 'X') => popUp opens (popUP will depend by the variable winner)
}

function App() {

  let playerData = structuredClone(INPUT_DATA)// deep copy...

  const [player, setPlayer] = useState(playerData) // player data (current symbol, name....))

  const [activePlayer, setActivePlayer] = useState('') // current active Player (in this moment)

  const [gameSquareData, setGameSquareData] = useState([]) // logs of all clicks with playerName, symbol etc

  // handling player clicks on gameTable cells
  const getDataOnClick = (rowIndex, colIndex) => {

    setActivePlayer(() => activePlayer === 'player1' ? 'player2' : 'player1')

    setGameSquareData(prevState => {
      // let namePlayer = player[activePlayer].playerName
      let symbolPlayer = player[activePlayer].playerSymbol
      let namePlayer = player[activePlayer].playerName
      let playerTurnsData = [...prevState, { curName: namePlayer, curSymbol: symbolPlayer, square: { row: rowIndex, col: colIndex } }]

      return playerTurnsData
    })
  }

  const gameTable = setGameTable(gameSquareData) // re-run every time the state changes

  const winner1 = checkWinningCombinations(gameTable, gameSquareData);

  const clickHandlerReset = () => {

    if (activePlayer) {

      setPlayer(() => playerData)
      setActivePlayer(() => '') // when game is started
      setGameSquareData(() => [])

    }
    if (!activePlayer) {
      setPlayer(() => playerData) // when game not started yet
    }

  } // reset data on button 'reset' click

  const closeHandlerPopUp = () => {

    setGameSquareData(() => [])

    setPlayer(prevState => ({
      ...prevState,
      [activePlayer]: {
        ...prevState[activePlayer],
        playerWins: prevState[activePlayer].playerWins + 1
      }
    }))

  } //close popUp + reset gameTable

  const handleStartClick = () => {
    setActivePlayer(() => 'player1')
  } // start game handler

  const gameDraw = gameSquareData.length === 9 // opens popUp if the result of the game is a draw

  console.log(activePlayer)
  return (
    <main className={styles.wrapper}>

      <img className={styles.logo__img} src={logo} alt="Game logo" title='Main game logo' />

      {/* main game container */}
      <div className={styles['game-wrapper']}>

        <div className={styles.game__players}>

          <Player toggleValue={player.toggle} id='player1' name='Player 1' symbol='X' player={player.player1} setPlayer={setPlayer} activeP={activePlayer} />
          <Player toggleValue={player.toggle} id='player2' name='Player 2' symbol='O' player={player.player2} setPlayer={setPlayer} activeP={activePlayer} />

        </div>
        {/* <PlayerLine /> */}

        <GameStats player={player} />

        {!activePlayer ? <button className={styles['start-button']} onClick={handleStartClick}>Start game!</button> : <p className={styles['start-text']}>Game Started!</p>}

        <GameTable gameTable={gameTable} onSquareClick={getDataOnClick} active={activePlayer} />


        <button className={styles['reset-button']} onClick={clickHandlerReset} >Reset</button>

        <Log data={gameSquareData} />
      </div>
      {/* end main conatiner */}
      <PopUp winner={winner1} onClosePopUp={closeHandlerPopUp} draw={gameDraw} />

    </main>
  )
}

export default App
