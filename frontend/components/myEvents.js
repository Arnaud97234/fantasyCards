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
  const token = useSelector((state) => state.users.value.token);
  const [dataMyEvents, setDataMyEvents] = useState([])

  // useEffect(() => {
  //   fetch(`http://localhost:3000/events/infoMyEvents/${token}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataMyEvents(data)
  //     });
  // }, []);

  // const infoMyEvents = dataMyEvents.map((data, i)=> {
  //   return (
  //     <MyEventsListe
  //       key={i}
  //       titleEvent={data.titleEvent}
  //       game1Team1={data.game1Team1}
  //       game1Team2={data.game1Team2}
  //       game1Result={data.game1Result}
  //       game2Team1={data.game2Team1}
  //       game2Team2={data.game2Team2}
  //       game2Result={data.game2Result}
  //       game3Team1={data.game3Team1}
  //       game3Team2={data.game3Team2}
  //       game3Result={data.game3Result}
  //     />
  //   );
  //       })

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>My events</h2>
      <div className={styles.allEventContainer}>
        {infoMyEvents}
      </div>
    </main>
  );
}

export default MyEvents;
