import styles from "../styles/PendingGame.module.css";
import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import AddCardInGameModal from "./modals/AddCardInGameModal.js";
import CardGameTa from "./modals/CardGameTa.js";

function PendingGame(props) {
  const [teamHome, setTeamHome] = useState("");
  const [imgTeamHome, setImgTeamHome] = useState("");
  const [teamAway, setTeamAway] = useState("");
  const [imgTeamAway, setImgTeamAway] = useState("");
  const [addCardVisible, setAddCardVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/games/teams/${props.teamHomeId}/${props.teamAwayId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTeamHome(data.teamHome);
        setImgTeamHome(data.imageTeamHome);
        setTeamAway(data.teamAway);
        setImgTeamAway(data.imageTeamAway);
      });
  }, []);

  const handleAddCard = () => {
    setAddCardVisible(true);
  };

  const handleCancelAddCard = () => {
    setAddCardVisible(false);
  };

  const CustomCloseIcon = () => {
    return <Button className={styles.closeModalButton}>X</Button>;
  };

  const handleSelectedCard = (name) => {
    fetch(`http://localhost:3000/card/find/${name}`)
      .then((response) => response.json())
      .then((card) => {
        console.log(card);
        setSelectedCard([...selectedCard,card.data]);
        setAddCardVisible(false);
      });
  };
  console.log(selectedCard);

  const players =
    selectedCard &&
    selectedCard.map((data, i) => {
      return (
        <CardGameTa
          key={i}
          playerName={data.name}
          playerImage={data.picture}
          rarity={data.rarity}
          imgTeamAway={props.imgTeamAway}
        />
      );
    });

  return (
    <div className={styles.gameInfo}>
      <p className={styles.info}>Match :</p>
      <p>
        <img className={styles.img} src={imgTeamHome} /> {teamHome} VS
        <img className={styles.img} src={imgTeamAway} /> {teamAway}
      </p>
      <p>
        Start date : {props.startDate} / End date : {props.endDate}
      </p>
      <p className={styles.info}>Status : </p>
      <p>{props.status}</p>
      <p className={styles.info}>Select card : </p>
      <div className={styles.allCardContainer}>
        {players}
        <button
          className={styles.buttonContainer}
          onClick={() => {
            handleAddCard();
          }}
        >
          <div className={styles.addCard}>+</div>
        </button>
      </div>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={600}
        centered={true}
        onCancel={() => handleCancelAddCard()}
        visible={addCardVisible}
        footer={null}
      >
        <AddCardInGameModal
          handleSelectedCard={handleSelectedCard}
          teamHomeId={props.teamHomeId}
          teamAwayId={props.teamAwayId}
          imgTeamHome={props.imgTeamHome}
          imgTeamAway={props.imgTeamAway}
        />
      </Modal>
    </div>
  );
}

export default PendingGame;
