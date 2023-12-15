
function DbGame(props) {


  return (
    <div>
    <p>_id:{props.gameId}</p>
    <p>teamHomeId:{props.teamHomeId}</p>
    <p>teamAwayId:{props.teamAwayId}</p>
    <p>startDate:{props.gameStartDate}</p>
    <p>endDate:{props.gameEndDate}</p>
    <p>status:{props.status}</p>
    <p>winnerTeamHome:{props.winnerTeamHome}</p>
    <p>winnerTeamAway:{props.winnerTeamAway}</p>
    </div>
  );
}

export default DbGame;