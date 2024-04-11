
import styles from './GameStats.module.css'

const GameStats = props => {

    return (
        <div>

            <span>
                
                <p>{props.player.player1.playerName}: {props.player.player2.playerWins}</p> {/* значення стоять навпаки (player2/player1) бо коли викликається функція зміни стану виграшів (setPlayer) activePlayer стоїть на крок попереду(activePlayer змінюється на наступний стан ще перед викликом setPlayer)  */}
                <p>{props.player.player2.playerName}: {props.player.player1.playerWins}</p>
                
            </span>
            
        </div>
    )
}


export default GameStats