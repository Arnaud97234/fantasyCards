import styles from "../styles/FutureEvents.module.css"
import Event from "./Event"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

function futureEvents() {


    const [events, setEvents] = useState(null)

    const userToken = useSelector((state) => state.users.value.token)

    useEffect(() => {
        if (userToken == '') {
            return
        }
        fetch(`http://localhost:3000/games/gameByEvent/${userToken}`)
            .then(response => response.json())
            .then(events => {
                setEvents(events)
            })
    }, [])

    const eventsToDisplay = events && events.events.eventsId.map((e, i) => {
        return (
            <Event
                id={e._id}
                eventstart={e.startDate}
                eventEnd={e.enDate}
                status={e.status}
                title={e.title}
                gamesId={e.gamesId}
            />
        )
    })

    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>Future Events</h2>
                <div className={styles.textContainer}>
                    <span className={styles.text}>Events not started yet</span>
                </div>
                <div className={styles.eventsList}>
                    {eventsToDisplay}

                </div>
            </main>
        </div>
    )
}

export default futureEvents