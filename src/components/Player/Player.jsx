import styles from './Player.module.css'

import { useState, useEffect } from 'react'

const Player = ({ name, symbol, id, player, toggleValue, setPlayer, activeP, isReset}) => {


    const [toggle, setToggle] = useState({
        input: false,
        inputClicked: false,
        popUp: false
    })

    useEffect( () => {

        setToggle( prevState => {
            return {
                ...prevState,
                input: false // не запускає цей кусок, коли нижимається reset кнопка (при ще не початій грі), бо reset кнопка обнуляє activeP, а при не початій грі немає що обнуляти бо дані в activeP і так стандартні. придумати щось....
                // додав стан для reset кнопки і просто його змінюю при натисканні на кнопку
            }
        } )

    }, [isReset] )

    const changeHandler = (event, data) => {
        setPlayer(prevState => {
            return {
                ...prevState,
                [id]: {
                    ...prevState[id],
                    [data]: event.target.value
                }

            }
        })
    }

    const clickHandlerButton = () => {

        if (!toggle.input) {
            setToggle(prevState => { return { ...prevState, input: !prevState.input } })

            setPlayer(prevState => {
                return {
                    ...prevState,
                    toggle: prevState.toggle.length === 0 && prevState.toggle !== id ? id : ''
                }
            })
        }



        else {
            if (player.playerName.length > 0 && player.playerSymbol.length > 0) {
                setToggle(prevState => { return { ...prevState, input: !prevState.input } })
                setPlayer(prevState => {
                    return {
                        ...prevState,
                        toggle: ''
                    }
                })
            }

            else {
                setToggle(prevState => { return { ...prevState, popUp: !prevState.popUp } })
            }


        }


    }

    const handlerClosePopUp = () => setToggle(prevState => { return { ...prevState, popUp: !prevState.popUp } })

    const clickHandlerInput = item => {
        setToggle(prevState => { return { ...prevState, inputClicked: !prevState.inputClicked } }),
            setPlayer(prevState => {
                return {
                    ...prevState,
                    [id]: {
                        ...prevState[id],
                        [item]: ''
                    }

                }
            })
    }

    const animationClass = toggle.input ? styles['animated-input'] : undefined



    const isGameStarted = activeP // disable all buttons when game started

    // rule - !isGameStarted for the case when the edit button is pressed and the player presses the start button
    const isTrue = toggleValue !== id && toggleValue && !isGameStarted // for switch button disable/enable

    const disabledClass = isTrue ? styles['input__nameText-disabled'] : undefined


    return (

        <div className={`${styles.player} ${activeP && activeP === id ? styles['active-player'] : undefined}`}>

            <button disabled={isTrue || isGameStarted } className={styles.player__button} onClick={clickHandlerButton} >
                {activeP || !toggle.input ? 'Edit' : toggle.input ? 'Save' : 'Edit'}
                
            </button>


            <div className={styles['players-box']}>

                <span className={styles.player__input}>
                    <p className={`${styles.input__paragraph} ${disabledClass}`}>Name:</p>
                    {

                        toggle.input ? // name

                            <input className={`${styles.input__name} ${animationClass}`} value={player.playerName} type="text" onChange={event => changeHandler(event, Object.keys(player)[0])} onClick={() => clickHandlerInput(Object.keys(player)[0])} placeholder='Name' required maxLength={10} />

                            :

                            <span className={`${styles.input__nameText} ${disabledClass}`}>{player.playerName.length <= 0 ? name : player.playerName}</span>

                    }
                </span>

                <span className={styles.player__input}>
                    <p className={`${disabledClass} ${styles.input__paragraph}`}>Symbol:</p>
                    {toggle.input ? // symbol

                        <input className={`${styles.input__symbol} ${animationClass}`} value={player.playerSymbol} type="text" onChange={event => changeHandler(event, Object.keys(player)[1])} onClick={() => clickHandlerInput(Object.keys(player)[1])} placeholder='Symbol' required />

                        :

                        <span className={`${styles.input__nameText} ${disabledClass}`}>{player.playerSymbol.length <= 0 ? symbol : player.playerSymbol}</span>}
                </span>

            </div>



            {toggle.popUp ?

                <div className={styles.popUp}>
                    <div className={styles.popUp__content}>
                        <h2>Warning!</h2>
                        <p>You must enter your name and symbol.</p>
                        <button className={styles.popUp__button} onClick={handlerClosePopUp}>I understand</button>
                    </div>
                </div>

                :

                undefined
            }
        </div>



    )
}

export default Player