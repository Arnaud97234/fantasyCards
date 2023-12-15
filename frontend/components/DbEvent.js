import DbGame from "./DbGame";

function DbEvent(props) {


  const infoGame =
    props.gameId.map((data, i) => {
      return (
        <DbGame
          _id={data._id}
          teamHomeId={data.teamHomeId}
          teamAwayId={data.teamAwayId}
          gameStartDate={data.startDate}
          gameEndDate={data.endDate}
          status={data.status}
          winnerTeamHome={data.winnerTeamHome}
          winnerTeamAway={data.winnerTeamAway}
        />
      );
    });

  return (
    <div>
      <p>_id:{props.eventId}</p>
      <p>title:{props.title}</p>
      <p>startDate:{props.eventStartDate}</p>
      <p>endDate:{props.eventEndDate}</p>
      <p>status:{props.status}</p>
      <p>gameId:{infoGame}</p>
    </div>
  );
}

export default DbEvent;
