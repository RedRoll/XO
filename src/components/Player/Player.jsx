import styles from './Player.module.css'

import { useState } from 'react'

const Player = ({ name, symbol }) => {

    const INPUT_DATA = {
        playerName: name,
        playerSymbol: symbol,  // планую використати для обнулення гравців
    }

    let playerData = structuredClone(INPUT_DATA)

    const [player, setPlayer] = useState(playerData)

    const changeHandler = (event, data) => {
        setPlayer(prevState => {
            return {
                ...prevState,
                [data]: event.target.value
            }
        })
    }


    // ---------------------------------------------------------------------

    const [toggle, setToggle] = useState({
        input: false,
        popUp: false
    })

    const clickHandler = () => {
        player.playerName.length > 0 && player.playerSymbol.length > 0 ? setToggle(prevState => { return { ...prevState, input: !prevState.input } }) : setToggle(prevState => { return { ...prevState, popUp: !prevState.popUp } })
    }

    return (

        <div className={styles.player}>

            <button className={styles.player__button} onClick={clickHandler} >{toggle.input ? 'Save' : 'Edit'}</button>


            {toggle.input ? // name

                <input className={styles.player__name} value={player.playerName} type="text" onChange={event => changeHandler(event, Object.keys(player)[0])} placeholder='Name' required />

                :

                <span className={styles.player__nameText}>{player.playerName}</span>}

            {toggle.input ? // symbol

                <input className={styles.player__name} value={player.playerSymbol} type="text" onChange={event => changeHandler(event, Object.keys(player)[1])} placeholder='Name' required />

                :

                <span className={styles.player__nameText}>{player.playerSymbol}</span>}



            {toggle.popUp ?

                <div className={styles.popUp}>
                    <div className={styles.popUp__content}>
                        <h2>Popup Title</h2>
                        <p>This is the content of the popup.</p>
                        <button onClick={() => { }}>Close</button>
                    </div>
                </div>

                :

                undefined
            }
        </div>



    )
}

export default Player