import styles from "../styles/FutureEvents.module.css"
import FutureEvent from "./FutureEvent"
import { useState } from "react"
import { useSelector } from "react-redux"

function futureEvents() {

    const eventsList = useSelector((state) => state.events.value.futureEvent)
    console.log(eventsList)
    let events = eventsList.map((e, i) => {
        console.log(e.status)
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