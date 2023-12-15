import styles from "../styles/Game.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResumeEvent from "./ResumeEvent";
import { useRouter } from "next/router";
import {
  addPendingEventsToStore,
  addFutureEventsToStore,
} from "../reducers/events";

function Game() {
  const router = useRouter();
  const dispatch = useDispatch();
  const myEvent = useSelector((state) => state.users.value.eventsList);
  const pendingEvent = useSelector((state) => state.events.value.pendingEvent);
  const futureEvent = useSelector((state) => state.events.value.futureEvent);
  console.log(myEvent);


  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        dispatch(
          addPendingEventsToStore(
            data.events.filter((data, i) => data.status !== "close")
          )
        );
        dispatch(
          addFutureEventsToStore(
            data.events.filter((data, i) => data.status !== "in progress")
          )
        );
      });
  }, []);

  const infoPendingEvent = pendingEvent.map((data, i) => {
    return (
      <ResumeEvent
        key={i}
        title={data.title}
        startDate={data.startDate}
        endDate={data.endDate}
        status={data.status}
      />
    );
  });

  const infoFutureEvent = futureEvent.map((data, i) => {
    return (
      <ResumeEvent
        key={i}
        title={data.title}
        startDate={data.startDate}
        endDate={data.endDate}
        status={data.status}
      />
    );
  });

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
            {/* {infoMyEvent} */}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>View more</button>
          </div>
        </div>
        <div className={styles.eventContainer}>
          <div className={styles.textContainer}>
            <h3 className={styles.littleTitle}>Pending events</h3>
            {infoPendingEvent}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>View more</button>
          </div>
        </div>
        <div className={styles.eventContainer}>
          <div className={styles.textContainer}>
            <h3 className={styles.littleTitle}>Future events</h3>
            {infoFutureEvent}
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => {
              router.push("/futureEvents");
            }} className={styles.button}>View more</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Game;
