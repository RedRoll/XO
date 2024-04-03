import styles from './PopUp.module.css'

const PopUp = ({ winner, onClosePopUp, draw }) => {

    return (
        winner || draw ? <div className={styles['pop-up']}>
            {winner && <h3 className={styles['pop-up__title']}>Player {winner} win!</h3>}
            {!winner && <h3 className={styles['pop-up__title']}>It`s a draw! Let`s try again.</h3>}
            <button className={styles['pop-up__button']} onClick={onClosePopUp}>OK!</button>
        </div> : undefined
    )
}

export default PopUp