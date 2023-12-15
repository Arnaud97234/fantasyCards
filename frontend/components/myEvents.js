import styles from "../styles/MyEvents.module.css";
import MyEventsListe from "./myEventsListe";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DbEvent from "./DbEvent";
import DbGame from "./DbGame";

function MyEvents() {
  const token = useSelector((state) => state.users.value.token);
  const [dataMyEvents, setDataMyEvents] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/events/infoMyEvents/${token}`)
      .then((response) => response.json())
      .then((data) => {
        setDataMyEvents(data);
      });
  }, []);

  const infoEvents =
    dataMyEvents &&
    dataMyEvents.userInfo.eventsId.map((data, i) => {
      return (
        <DbEvent
          key={i}
          _id={data._id}
          title={data.title}
          eventStartDate={data.startDate}
          eventEndDate={data.endDate}
          status={data.status}
          gameId={data.gameId}
        />
      );
    });
  console.log(infoEvents);

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>My events</h2>
      <div className={styles.allEventContainer}>{infoEvents}</div>
    </main>
  );
}

export default MyEvents;
