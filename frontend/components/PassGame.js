import styles from "../styles/PendingGame.module.css";
import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import AddCardInGameModal from "./modals/AddCardInGameModal.js";
import CardGameTa from "./modals/CardGameTa.js";
import Pack from "./Pack.js";

function PassGame(props) {
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

  const handleClaemCredits = () => {
    setAddCardVisible(false);
  };

  const handleClaemPack = () => {
    setAddCardVisible(false);
  };

  const CustomCloseIcon = () => {
    return <Button className={styles.closeModalButton}>X</Button>;
  };

  const handleSelectedCard = (name) => {
    fetch(`http://localhost:3000/card/${name}`)
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
      {/* <p className={styles.info}>Select card : </p>
      <div className={styles.allCardContainer}>
        {players} */}
        <button
          className={styles.buttonRewards}
          onClick={() => {
            handleAddCard();
          }}
        >
          <p >Claim rewards</p>
        </button>
      {/* </div> */}
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={600}
        centered={true}
        onCancel={() => handleCancelAddCard()}
        visible={addCardVisible}
        footer={null}
      >
        <h2 className={styles.titreRewards}>Choose your reward :</h2>
        <div className={styles.texteRewardsContainer}><p onClick={() => {
            handleClaemCredits();
          }} className={styles.texteRewards}>1 000 Crédits </p><p className={styles.titreRewards}> OR</p> <div onClick={() => {
            handleClaemPack();
          }} className={styles.packRewards}><Pack rarity={2} /></div></div>
      </Modal>
    </div>
  );
}

export default PassGame;