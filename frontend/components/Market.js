import styles from "../styles/Market.module.css";
import CardMarket from "../components/CardMarket";
import PackMarket from "../components/PackMarket";
import { useEffect, useState } from "react";

function Market() {
  const [marketCards, setMarketCards] = useState(null);
  const [marketPacks, setMarketPacks] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/card/marketCards")
      .then((response) => response.json())
      .then((data) => {
        setMarketCards(data.card);
      });
  }, []);

  const cards =
    marketCards &&
    marketCards.map((data, i) => {
      console.log(data);
      return (
        <CardMarket
          key={i}
          playerName={data.name}
          playerImage={data.picture}
          rarity={data.rarity}
        />
      );
    });

  useEffect(() => {
    fetch("http://localhost:3000/pack/marketPacks")
      .then((response) => response.json())
      .then((data) => {
        setMarketPacks(data.pack);
      });
  }, []);

  const packs =
    marketPacks &&
    marketPacks.map((data, i) => {
      console.log(data);
      return <PackMarket key={i} rarity={data.rarity} />;
    });

  return (
    <main className={styles.main}>
      <h1 className={styles.boxTitle1}>FANTASY MARKET</h1>
      <div className={styles.marketContainer}>
        <div className={styles.content}>
          <h3 className={styles.boxTitle2}>Buy Cards</h3>
          <div className={styles.cards}>{cards}</div>
        </div>

        
        <div className={styles.content}>
        <div className={styles.divider}></div>
          <h3 className={styles.boxTitle2}>Buy Packs</h3>
          <div className={styles.packs}>{packs}</div>
        </div>
      </div>
    </main>
  );
}

export default Market;
