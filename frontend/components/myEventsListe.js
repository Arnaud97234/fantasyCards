import styles from "../styles/MyEventsListe.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResumeEvent from "./ResumeEvent";
import {
  addPendingEventsToStore,
  addFutureEventsToStore,
} from "../reducers/events";

function MyEventsListe(props) {



  return (
    <div className={styles.eventContainer}>
          <h3 className={styles.littleTitle}>Event 1</h3>
          <div className={styles.allContainer}>
            <div>
              <div className={styles.containerGameList}>
                <h4>Game list</h4>
                <p>Team 1 - Team 2</p>
                <p>Team 1 - Team 2</p>
                <p>Team 1 - Team 2</p>
              </div>
              <div className={styles.containerCardEngaged}>
                <h4>Cart engaged</h4>
                <div className={styles.allCardGame}>
                  <div className={styles.cardGame}>
                    <h3>game1</h3>
                  </div>
                  <div className={styles.cardGame}>
                    <h3>game2</h3>
                  </div>
                  <div className={styles.cardGame}>
                    <h3>game2</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.result}>
              <div>
                <h3>Results</h3>
                <p>Game 1:</p>
                <p>Game 2:</p>
                <p>Game 3:</p>
              </div>
              <button className={styles.buttum}>Claim rewards</button>
            </div>
          </div>
        </div>
  );
}

export default MyEventsListe;