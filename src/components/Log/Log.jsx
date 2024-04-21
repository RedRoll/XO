import styles from './Log.module.css'

const Log = ({ data }) => {

  
    return (
        <div className={styles.log}>
            <h3 className={styles.log__title}>Log</h3>

            <div className={styles['log__menu-wrapper']}> {/*this div added for correct rendering of menu-items (the top of the container must be always displayed when the scroll is present)*/}

                <ol className={styles.log__menu}> {/*reversed-column render*/}

                    {data.map((item, index) => <li className={styles.menu__item} key={index}><span className={styles['menu__special-item']}>{item.curName}</span> cliked cell <span className={styles['menu__special-item']}>{item.square.row + 1} - {item.square.col + 1}</span></li>)}

                </ol>

            </div>

        </div>
    )
}

export default Log