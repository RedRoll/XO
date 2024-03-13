import styles from './PlayerLine.module.css'

import { useState } from 'react'

import Player from './Player/Player'



const PlayerLine = ({ name, symbol }) => {

    const INPUT_DATA = {
        playerName: name,
        playerSymbol: symbol,  // планую використати для обнулення гравців
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

           
            <Player onChangeHandler={changeHandler} player={player} />
            <Player onChangeHandler={changeHandler} player={player} />
            
        </div>
    )
}

export default PlayerLine