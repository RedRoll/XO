import styles from './PopUp.module.css'

const PopUp = ({ winner, onClosePopUp, draw }) => {

    return (
        winner || draw ? <div className={styles['pop-up']}>
            {winner && <h3>Player {winner} win!</h3>}
            {!winner && <h3>It`s a draw! Let`s try again.</h3>}
            <button onClick={onClosePopUp}>close window</button>
        </div> : undefined
    )
}

export default PopUp