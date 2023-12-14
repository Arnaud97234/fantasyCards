import styles from "../styles/PackInventory.module.css";
function CardInventory({ rarity }) {
  let style = {};
  switch (rarity) {
    case 6:
      style = { backgroundColor: "#F5DF41" };
      break;
    case 5:
      style = { backgroundColor: "#D23B3B" };
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
  return (
    <div className={styles.container}>
      <div className={styles.packContainer} style={style}>
        <img className={styles.img} src="./images/logo.png" />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>OPEN</button>
        <button className={styles.btn}>SELL</button>
      </div>
    </div>
  );
}

export default CardInventory;
