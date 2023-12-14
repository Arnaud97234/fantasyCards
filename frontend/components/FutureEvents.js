import styles from "../styles/FutureEvents.module.css"
import FutureEvent from "./FutureEvent"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

function futureEvents() {

    const userToken = useSelector((state) => state.users.value.token)
    // const stringifiedEventsList = JSON.stringify(eventsList[0].gamesId)

    useEffect(() => {
        fetch(`http://localhost:3000/games/teamsByGame/${userToken}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    let events = eventsList.map((e, i) => {
        if (e.status === 'Not Started') {
            return <FutureEvent title={e.title} key={i} />
        }
    })

    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>Future Events</h2>
                <div className={styles.textContainer}>
                    <span className={styles.text}>Events not started yet</span>
                </div>
                <div className={styles.eventsList}>
                    {events}
                </div>
            </main>
        </div>
    )
}

export default futureEvents