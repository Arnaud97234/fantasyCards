import styles from "../styles/MyEvents.module.css";
import MyEventsListe from "./myEventsListe";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResumeEvent from "./ResumeEvent";
import {
  addPendingEventsToStore,
  addFutureEventsToStore,
} from "../reducers/events";

function MyEvents() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>My events</h2>
      <div className={styles.allEventContainer}>
        <MyEventsListe />
      </div>
    </main>
  );
}

export default MyEvents;
