
import styles from './GameStats.module.css'

const GameStats = props => {

    return (
        <div className={styles.stats}>



            <p>{props.player.player1.playerName} winnings: <span className={styles.stats__point}>{props.player.player2.playerWins}</span></p> {/* значення стоять навпаки (player2/player1) бо коли викликається функція зміни стану виграшів (setPlayer) activePlayer стоїть на крок попереду(activePlayer змінюється на наступний стан ще перед викликом setPlayer)  */}
            <p>{props.player.player2.playerName} winnings: <span className={styles.stats__point}>{props.player.player1.playerWins}</span></p>



        </div>
    )
}


export default GameStats