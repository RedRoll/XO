import styles from './App.module.css'

import { useState } from 'react'

import PlayerLine from './components/PlayerLine/PlayerLine'

import logo from './assets/LOGO.png'

// const DEFAULT_PLAYER_DATA = {
//   player1: {
//     name: 'Player 1',
//     symbol: 'X'
//   },
//   player2: {
//     name: 'Player 2',
//     symbol: 'O'
//   },
//   toggle: true
// }

function App() {

  // let playerData = structuredClone(DEFAULT_PLAYER_DATA)

  // const [player, setplayer] =  useState(playerData)

  return (
    <main className={styles.wrapper}>

      <img className={styles.logo__img} src={logo} alt="Game logo" title='Main game logo' />

      {/* main game container */}
      <div className={styles['game-wrapper']}>

        <div className={styles.game__players}>
          <PlayerLine name='Player 1' symbol='X' />
          <PlayerLine name='Player 2' symbol='O' />
        </div>
        {/* <PlayerLine /> */}

      </div>
      {/* end main conatiner */}

    </main>
  )
}

export default App
