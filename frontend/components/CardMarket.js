import styles from "../styles/CardMarket.module.css";
import { Modal, Button } from "antd";
import BuyCardModal from "./modals/BuyCardModal.js";
import { useState } from "react";
function CardInventory({ playerName, playerImage, rarity, id, token }) {

  const [sellCardVisible, setSellCardVisible] = useState(false);

  const ModalVisibleSellCard = () => {
    setSellCardVisible(true);
  };

  const handleCancelModalSellCard = () => {
    setSellCardVisible(false);
  };

  console.log('a',id)
  console.log('b',token)
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

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer} style={style}>
          <img src={playerImage} width={148} height={150}/>
          <p>{playerName}</p>
      </div>
      <div className={styles.alignBtn}>
        <button disabled className={styles.btn} onClick={handleModalVisible}>Desc</button>
        <button className={styles.btn} onClick={handleModalVisible}>Buy</button>
      </div>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={300}
        centered={true}
        onCancel={() => handleCancelModalSellCard()}
        visible={sellCardVisible}
        footer={null}
      >
        <BuyCardModal id={id} sellerToken={token} />
      </Modal>
    </div>
  );
}

const CustomCloseIcon = () => {
  return <Button className={styles.closeModalButton}>X</Button>;
};

export default CardInventory;
