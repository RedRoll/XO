import styles from './Log.module.css'

const Log = ({data}) => {
    return (
        <div className={styles.log}>
            <h3 className={styles.log__title}>Log</h3>
            <ol className={styles.log__menu}>
                {data.map( (item, index) => <li className={styles.menu__item}  key={index}>Player {item.curSymbol} cliked cell {item.square.row +1} {item.square.col +1}</li> )}
            </ol>
        </div>
    )
}

export default Log