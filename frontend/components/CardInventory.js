import styles from "../styles/CardInventory.module.css";
function CardInventory({ playerName, playerImage, rarity, ModalVisibleSellCard, id }) {

  let style = {};
  switch (rarity) {
    case 6:
      style = { backgroundColor: "#F5DF41" };
      break;
    case 5:
      style = { backgroundColor: "#863965" };
      break;
    case 4:
      style = { backgroundColor: "#6C3082" };
      break;
    case 3:
      style = { backgroundColor: "#0070BB" };
      break;
    case 2:
      style = { backgroundColor: "#00A86B" };
      break;
    case 1:
      style = { backgroundColor: "#E5E4E2" };
      break;

    default:
      break;
  }

  const handleModalVisible = () => {
    ModalVisibleSellCard()
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer} style={style}>
        <img src={playerImage} />
        <p>{playerName}</p>
        {/* <div className={styles.infosClub}>
            <img src={clubImage} />
            <p>{clubName}</p>
          </div> */}
      </div>
      <div>
        <button className={styles.btn} onClick={handleModalVisible}>SELL</button>
      </div>
    </div>
  );
}

export default CardInventory;
