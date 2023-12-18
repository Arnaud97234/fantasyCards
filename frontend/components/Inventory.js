import styles from "../styles/Inventory.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import { useState } from "react";
import CardInventory from "./CardInventory";
import PackInventory from "./PackInventory";
import { Modal, Button } from "antd";
import SellCardModal from "./modals/SellCardModal.js"; 
import SigninModal from "./modals/SigninModal.js";

export default function Inventory() {
  const userCards = useSelector((state) => state.users.value.cardsList);
  const userPacks = useSelector((state) => state.users.value.packsList);
  const token = useSelector((state)=> state.users.value.token)
  const [sellCardVisible, setSellCardVisible] = useState(false);
  const [sellPackVisible, setPackCardVisible] = useState(false);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ModalVisibleSellCard = () => {
    setSellCardVisible(true);
  };

  const ModalVisibleSellPack = () => {
    setPackCardVisible(true);
  };

  const handleCancelModalSellCard = () => {
    setSellCardVisible(false);
  };

  const handleCancelModalSellPack = () => {
    setPackCardVisible(false);
  };
  
  const id = userCards.map(user => 
    user.cardPrices.find(data => data.userToken === token))
   ;

  const cardPlayer = userCards && userCards.map((data, i) => {
    const id = userCards.map(user =>
      user.cardPrices.find(ids => ids.userToken === token))
      console.log(id);
     ;
      return (
        <CardInventory
          key={i}
          id={id}
          playerName={data.name}
          playerImage={data.picture}
          rarity={data.rarity}
          ModalVisibleSellCard={ModalVisibleSellCard}
        />
      );
  })

  const packPlayer = userPacks.map((data, i) => {
    return (
      <PackInventory
        key={i}
        rarity={data.rarity}
        ModalVisibleSellPack={ModalVisibleSellPack}
      />
    );
  });

  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.title}>Inventory</h1>
        <div className={styles.container}>
          <div className={styles.content}>
            <Box sx={{ width: "50%" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange} className={styles.tabList}>
                    <Tab label="Cards" value="1" />
                    <Tab label="Packs" value="2" />
                  </TabList>
                </Box>
                <TabPanel
                  style={{
                    height: "0px",
                    paddingTop: "50px",
                    textAlign: "center",
                  }}
                  className={styles.cardContainer}
                  value="1"
                >
                  {cardPlayer}
                </TabPanel>
                <TabPanel
                  style={{
                    height: "300px",
                    padding: "0px",
                    textAlign: "center",
                  }}
                  className={styles.packContainer}
                  value="2"
                >
                  {packPlayer}
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={300}
        centered={true}
        onCancel={() => handleCancelModalSellCard()}
        visible={sellCardVisible}
        footer={null}
      >
        <SellCardModal />
      </Modal>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={300}
        centered={true}
        onCancel={() => handleCancelModalSellPack()}
        visible={sellPackVisible}
        footer={null}
      >
        <SigninModal />
      </Modal>
    </div>
  );
}

const CustomCloseIcon = () => {
  return <Button className={styles.closeModalButton}>X</Button>;
};