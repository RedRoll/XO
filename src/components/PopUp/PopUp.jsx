import styles from './PopUp.module.css'

const PopUp = ({ winner, onClosePopUp, draw, onCancel }) => {

    return (
        winner || draw ? <div className={styles['pop-up']}>
            {winner && <h3 className={styles['pop-up__title']}>Player {winner} win!</h3>}
            {!winner && <h3 className={styles['pop-up__title']}>It`s a draw! Let`s try again.</h3>}
            <button className={styles['pop-up__button']} onClick={onClosePopUp}>Yes</button>
            <button className={styles['pop-up__button']} onClick={onCancel}>No</button>
        </div> : undefined
    )
}

export default PopUp