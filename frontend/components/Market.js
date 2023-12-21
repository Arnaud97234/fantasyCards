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

  const tabCards = [];

  const carsList =
    marketCards &&
    marketCards.map((card) => {
      const {
        _id,
        teamId,
        name,
        rarity,
        stock,
        picture,
        eventsId,
        cardPrices,
      } = card;


      for (const data of cardPrices) {
        if(data.price > 0){
          const dataCard = {
            cardId: _id,
            teamId,
            name,
            rarity,
            stock,
            picture,
            eventsId,
            cardPrice: data ? data.price : null,
            subDocId:data._id,
            userToken: data
              ? data.userToken
              : null,
            // Ajoutez d'autres champs si nécessaire
          };
          tabCards.push(dataCard)
        }
      }
    });

    console.log('v',tabCards)

  const cards =
    tabCards &&
    tabCards.map((data, i) => {
      console.log("a", data);
      return (
        <CardMarket
          key={i}
          id={data.subDocId}
          token={data.userToken}
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

  const tabPacks = [];

  const packsList =
    marketPacks &&
    marketPacks.map((pack) => {
      const {
        _id,
        rarity,
        stock,
        packPrices,
      } = pack;

      for (const data of packPrices) {
        if(data.price > 0){
          const dataPack = {
            packId: _id,
            rarity,
            stock,
            packPrice: data ? data.price : null,
            subDocId: data._id,
            userToken: data
              ? data.userToken
              : null,
            // Ajoutez d'autres champs si nécessaire
          };
          tabPacks.push(dataPack)
        }
      }
    });

  const packs =
    tabPacks &&
    tabPacks.map((data, i) => {
      console.log(data);
      return <PackMarket key={i} id={data.subDocId} rarity={data.rarity} />;
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
