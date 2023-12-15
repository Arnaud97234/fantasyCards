import styles from "../styles/FutureEvents.module.css"
import Event from "./Event"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

function futureEvents() {

    const userToken = useSelector((state) => state.users.value.token)

    useEffect(() => {
        fetch(`http://localhost:3000/games/gameByEvent/${userToken}`)
            .then(response => response.json())
            .then(events => {
                events.events.eventsId.map((event) => {
                    console.log(event)
                })
            })
    }, [])



    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>Future Events</h2>
                <div className={styles.textContainer}>
                    <span className={styles.text}>Events not started yet</span>
                </div>
                <div className={styles.eventsList}>
                    <Event />

                </div>
            </main>
        </div>
    )
}

export default futureEvents