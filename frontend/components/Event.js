import styles from "../styles/FutureEvents.module.css"


const MyEvent = (props) => {
    return (
        <div className={styles.event} id={styles.myEvent}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.eventContent}>
                <div className={styles.gamesContent}>
                    <h3 className={styles.subtitle}>Game List</h3>
                    <div className={styles.gameList}>
                        {props.home} - {props.away}
                    </div>
                </div>
                <div className={styles.cardsContent}>
                    <h3 className={styles.subtitle}>Cards engaged</h3>
                    <div className={styles.gamListContainer}>
                        <div className={styles.cardsByGame}>
                            <div className={styles.game}>
                                <span className={styles.gameName}>{props.gameName}</span>
                                <div className={styles.cardList}>
                                    <div className={styles.cards}>
                                        Cards
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.resultContent}>
                <h2 className={styles.subtitle}>Results</h2>
                <div className={styles.gameResults}>
                    Game 1: 1 - 0
                    Game 2: 1 - 3
                </div>
                <button className={styles.button}>{props.status}</button>
            </div>
        </div>
    )
}

const FutureEvent = (props) => {
    return (
        <div className={styles.event} id={styles.futureEvent}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.gameContent}>
                <div className={styles.gamesList}>
                    <h3 className={styles.subtitle}>Game List</h3>
                    <div className={styles.gameList}>
                        {props.home} - {props.away}
                    </div>
                </div>
                <div className={styles.cardsContent}>
                    <h3 className={styles.subtitle}>Addmissible cards</h3>
                    <div className={styles.cards}>
                        Card 1
                        Card 2
                        Card 3
                    </div>
                </div>
            </div>
        </div>
    )
}

const pendingEvents = (props) => {
    return (
        <div className={styles.event}>
            <div className={styles.eventContainer}>
                <h3 className={styles.title}>{props.title}</h3>
                <div className={styles.eventContent}>
                    <div className={styles.gameListContent}>
                        <span className={styles.subtitle}>Game List</span>
                        <div className={styles.gameList}>
                            {props.home} - {props.away}
                        </div>
                    </div>
                    <div className={styles.cardContent}>
                        <span className={styles.subtitle}>Admissible Cards</span>
                        <div className={styles.cardsList}>
                            Card 1
                            Card 2
                            Card 3
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <span>Add</span>
                <button className={actionsButton}>Join</button>
            </div>
            <div className={styles.cardContainer}>
                <h3 className={styles.title}>Card engaged</h3>
                <div className={styles.cardContent}>
                    <div className={styles.game}>
                        <span>Game 1</span>
                        <span>Game 2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Event(props) {

    return (
        <>
            <FutureEvent />
        </>
    )
}

export default Event