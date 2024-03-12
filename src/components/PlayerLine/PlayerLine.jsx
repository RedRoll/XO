import styles from './PlayerLine.module.css'

import { useState } from 'react'



const PlayerLine = ({ name, symbol }) => {

    const INPUT_DATA = {
        playerName: name,
        playerSymbol: symbol,  // планую використати для обнулення гравців
        toggle: true 
    }

    let playerData = structuredClone(INPUT_DATA)

    const [player, setPlayer] = useState(playerData)
   
    const changeHandler = (event, data) => {
        setPlayer( prevState => {
            return {
                ...prevState,
                [data]: event.target.value
            }
        })
    }

    
   

    return (
        <div className={styles.player}>

            <input className={styles.player__name} value={player.playerName} type="text" onChange={event => changeHandler(event, Object.keys(player)[0])} required  />

            <input className={styles.player__symbol} value={player.playerSymbol} type="text" onChange={event => changeHandler(event, Object.keys(player)[1])}  required />

        </div>
    )
}

export default PlayerLine