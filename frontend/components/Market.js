import styles from '../styles/Market.module.css'
import Card from '../components/Card'
// TODO : faire en sorte que 2 componante s'affiche sur la page
import { useState, useEffect } from 'react';


function Market(props) {

    const [cardsData, setcardsData] = useState([]);

    // ./images/boxPicture_3.png
    const cards = [
        { teamId: 6451515, name: 'HANS SAMA', rarity: '1', stock: 2, picture: "./images/boxPicture_1.png" },
        { teamId: 45451545, name: 'HANS', rarity: '2', stock: 9, picture: "./images/boxPicture_2.png" },
        { teamId: 6451515, name: 'HANS SAMA', rarity: '1', stock: 2, picture: "./images/boxPicture_1.png" },
        { teamId: 45451545, name: 'HANS', rarity: '2', stock: 9, picture: "./images/boxPicture_2.png" },
        { teamId: 6451515, name: 'HANS SAMA', rarity: '1', stock: 2, picture: "./images/boxPicture_1.png" },
        { teamId: 45451545, name: 'HANS', rarity: '2', stock: 9, picture: "./images/boxPicture_2.png" },
        { teamId: 6451515, name: 'HANS SAMA', rarity: '1', stock: 2, picture: "./images/boxPicture_1.png" },
        { teamId: 45451545, name: 'HANS', rarity: '2', stock: 9, picture: "./images/boxPicture_2.png" },
        { teamId: 6451515, name: 'HANS SAMA', rarity: '1', stock: 2, picture: "./images/boxPicture_1.png" },
        { teamId: 45451545, name: 'HANS', rarity: '2', stock: 9, picture: "./images/boxPicture_2.png" },
        { teamId: 6451515, name: 'HANS SAMA', rarity: '1', stock: 2, picture: "./images/boxPicture_1.png" },
        { teamId: 45451545, name: 'HANS', rarity: '2', stock: 9, picture: "./images/boxPicture_2.png" },
      ];


    // console.log(cards[0])
    

    useEffect(() => {

        setcardsData(cards)
        // console.log(cardsData)
    })


    const cardsmap = cardsData.map((data, i) => {
        // console.log(data.stock)
        return <Card key={i} teamId={data.teamId} name={data.name} rarity={data.rarity} stock={data.stock} picture={data.picture}/>;
        
      });

      
    return (
    <main className={styles.main}>
        <h1 className={styles.boxTitle1} >FANTASY MARKET</h1>
        <div className={styles.marketContainer}>
            
            <div className={styles.content}>

                <h3 className={styles.boxTitle2} >Buy Cards</h3>
                
                {cardsmap}
                {/* <img style={{ width: 1600, height: 250, minWidth: 150, maxWidth: 180 }} className='boxPicture' src='./images/boxPicture_3.png' alt='Create your team' />
                <div className={styles.cardButtonContainer}>
                <button className={styles.cardButton}>DESC</button>
                <button className={styles.cardButton}>BUY</button>
                </div> */}
               
            </div >

            
            <div className={styles.content}>

            {/* <div className={styles.divider}></div>  */}
                
                <h3 className={styles.boxTitle2}>Buy Packs</h3>
                {cardsmap}
            </div>
        </div>
    </main>
    )
}

export default Market