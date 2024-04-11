import styles from './GameTable.module.css'


const GameBoard = ({ gameTable, onSquareClick, active}) => {

    return (
        <ol className={styles.board}>

       

            {gameTable.map((row, rowIndex) => <li className={styles.board__wrapper} key={rowIndex}> {/* 3 rows*/}

                <ol className={styles.board__row}>

                    {row.map((symbol, colIndex) => <li className={styles.row__symbol} key={colIndex}> {/*3 items in row*/}

                        <button onClick={() => onSquareClick(rowIndex, colIndex)} className={styles.symbol__button} disabled={symbol !== null || !active} > {/*disabled if symbol is on cell or game not started yet*/}
                            <span className={styles.button__item}>

                                {symbol}

                            </span>
                        </button> {/*cell in item*/}

                    </li>)}

                </ol>

            </li>)}

           

        </ol>
    )
}

export default GameBoard

// disabled={symbol !== null && true}