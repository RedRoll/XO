
import styles from './GameStats.module.css'

const GameStats = props => {

    return (
        <div>

            <span>
                <p>{props.player.player1.playerName}: {props.player.player1.playerWins}</p>
                <p>{props.player.player2.playerName}: {props.player.player2.playerWins}</p>
                {/* <p>Player 2 wins: {player2}</p> */}
            </span>
            
        </div>
    )
}


export default GameStats