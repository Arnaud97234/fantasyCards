import styles from "../styles/Inventory.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardInventory from "./CardInventory";
import PackInventory from "./PackInventory";

export default function Inventory() {
  const userCards = useSelector((state) => state.users.value.cardsList);
  const userPacks = useSelector((state) => state.users.value.packsList);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardPlayer = userCards.map((data, i) => {
    return (
      <CardInventory
        key={i}
        playerName={data.name}
        playerImage={data.picture}
        rarity={data.rarity}
      />
    );
  });

  const packPlayer = userPacks.map((data, i) => {
    return <PackInventory key={i} rarity={data.rarity} />;
  });

  return (
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
              style={{height: "0px", paddingTop:"50px", textAlign:"center"}}
                className={styles.cardContainer}
                value="1"
              >
                {cardPlayer}
              </TabPanel>
              <TabPanel style={{height: "300px", padding:"0px", textAlign:"center"}} className={styles.packContainer} value="2">
                {packPlayer}
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}
