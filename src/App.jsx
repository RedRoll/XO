import styles from './App.module.css'

import { useState } from 'react'

import Player from './components/Player/Player'

import logo from './assets/LOGO.png'

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


function App() {

  let playerData = structuredClone(INPUT_DATA)

  const [player, setPlayer] = useState(playerData)

  const clickHandlerReset = () =>  setPlayer(() => playerData) 

  console.log(player.toggle)
  
  return (
    <main className={styles.wrapper}>

      <img className={styles.logo__img} src={logo} alt="Game logo" title='Main game logo' />

      {/* main game container */}
      <div className={styles['game-wrapper']}>

        <div className={styles.game__players}>
          {/* додати логіку, якщо в одному playerline відкриті nput, то в іншому playerline заборонити відкривати доки не закриються в першому */}
          <Player toggleValue={player.toggle} id='player1' name='Player 1' symbol='X' player={player.player1} setPlayer={setPlayer} />
          <Player toggleValue={player.toggle} id='player2' name='Player 2' symbol='O' player={player.player2} setPlayer={setPlayer} />
        
        </div>
        {/* <PlayerLine /> */}


        <button onClick={clickHandlerReset} >Reset</button>
      </div>
      {/* end main conatiner */}

    </main>
  )
}

export default App
