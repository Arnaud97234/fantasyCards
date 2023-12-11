import styles from "../styles/Inventory.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Inventory() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <Box sx={{ width: "50%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Cards" value="1" />
              <Tab label="Packs" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">Mes Cartes</TabPanel>
          <TabPanel value="2">Mes Packs</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
