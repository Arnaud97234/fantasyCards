import styles from "../styles/FutureEvents.module.css"

function FutureEvent(props) {

    return (
        <>
            <div className={styles.eventContainer}>
                <h2 className={styles.eventTitle}>{props.title}</h2>
                <div className={styles.eventContent}>
                    <div className={styles.gamesList}>
                        <h3 className={styles.gamesListName}>Games List</h3>
                    </div>
                    <div className={styles.cardsList}>
                        <h3 className={styles.cardsListName}>Admissible cards</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FutureEvent