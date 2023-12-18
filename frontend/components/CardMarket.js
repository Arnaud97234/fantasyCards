import styles from "../styles/CardMarket.module.css";
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

  const handleModalVisible = ()=>{
    ModalVisibleSellCard()
  }

  console.log('aid',id)

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer} style={style}>
          <img src={playerImage} />
          <p>{playerName}</p>
      </div>
      <div className={styles.alignBtn}>
        <button className={styles.btn} onClick={handleModalVisible}>Desc</button>
        <button className={styles.btn} onClick={handleModalVisible}>Buy</button>
      </div>
    </div>
  );
}

export default CardInventory;
