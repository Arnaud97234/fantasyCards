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
          <h3 className={styles.littleTitle}>{props.titleEvent}</h3>
          <div className={styles.allContainer}>
            <div>
              <div className={styles.containerGameList}>
                <h4>Game list</h4>
                <div className={styles.GameList}>
                <p>{props.game1Team1} - {props.game1Team2}</p>
                <p>{props.game2Team1} - {props.game2Team2}</p>
                <p>{props.game3Team1} - {props.game3Team2}</p>
                </div>
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
                <p>Game 1: {props.game1Result}</p>
                <p>Game 2: {props.game2Result}</p>
                <p>Game 3: {props.game3Result}</p>
              </div>
              <button className={styles.buttum}>Claim rewards</button>
            </div>
          </div>
        </div>
  );
}

export default MyEventsListe;