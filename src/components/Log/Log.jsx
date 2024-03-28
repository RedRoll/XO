import styles from './Log.module.css'

const Log = ({data}) => {
    return (
        <div>
            <h3>Log</h3>
            <ol>
                {data.map( (item, index) => <li key={index}>Player {item.curSymbol} cliked cell {item.square.row +1} {item.square.col +1}</li> )}
            </ol>
        </div>
    )
}

export default Log