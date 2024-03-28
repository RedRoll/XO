import styles from './GameTable.module.css'


const GameBoard = ({ gameTable, onSquareClick }) => {

    return (
        <ol className={styles.board}>

            {gameTable.map((row, rowIndex) => <li key={rowIndex}> {/* 3 rows*/} 

                <ol className={styles.board__row}>
                    
                    {row.map((symbol, colIndex) => <li className={styles.row__symbol} key={colIndex}> {/*3 items in row*/} 

                        <button onClick={ () => onSquareClick(rowIndex, colIndex)} className={styles.symbol__button} disabled={symbol !== null}>{symbol}</button> {/*cell in item*/} 

                    </li>)}

                </ol>

            </li>)}

        </ol>
    )
}

export default GameBoard