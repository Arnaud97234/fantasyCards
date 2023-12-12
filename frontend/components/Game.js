import styles from "../styles/Game.module.css";
import { useEffect, useState } from "react";
import ResumeEvent from "./ResumeEvent";

function Game() {
  const [pendingEvent, setPendingEvent] = useState([]);
  const [futureEvent, setFutureEvent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        setPendingEvent(data.events.map((data, i)=> {
            return <ResumeEvent key={i} title={data.title} startDate={data.startDate} endDate={data.endDate} status={data.status}/>
        }))
      });
  }, []);

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Events</h2>
      <div className={styles.resumeContainer}>
        <ul>
          <li>My events: events that you joined already</li>
          <li>Pending events: events that you may want to join </li>
          <li>Future events: events comming soon</li>
        </ul>
      </div>
      <div className={styles.allEventContainer}>
        <div className={styles.eventContainer}>
          <div className={styles.textContainer}>
            <h3 className={styles.littleTitle}>My events</h3>
            <p>event 1</p>
            <p>event 2</p>
            <p>event 3</p>
          </div>
          <div className={styles.buttumContainer}>
            <button className={styles.buttum}>View more</button>
          </div>
        </div>
        <div className={styles.eventContainer}>
          <div className={styles.textContainer}>
            <h3 className={styles.littleTitle}>Pending events</h3>
            {pendingEvent}
          </div>
          <div className={styles.buttumContainer}>
            <button className={styles.buttum}>View more</button>
          </div>
        </div>
        <div className={styles.eventContainer}>
          <div className={styles.textContainer}>
            <h3 className={styles.littleTitle}>Future events</h3>
            <p>event 1</p>
            <p>event 2</p>
            <p>event 3</p>
          </div>
          <div className={styles.buttumContainer}>
            <button className={styles.buttum}>View more</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Game;
