import styles from '../styles/Market.module.css'
import Card from '../components/Card'


function Market(props) {


    const cardsData = [
        { teamId: 6451515, name: 'HANS SAMA', rarity: 'newyorker.jpg', stock: 2, picture: "https//" },
      ];


    const cards = cardsData.map((data, i) => {
        return <Card key={i} name={data.name} />;
    
      });

    return (
    <main className={styles.main}>
        <h1 className={styles.boxTitle1} >FANTASY MARKET</h1>
        <div className={styles.marketContainer}>
            <div className={styles.content}>
                <h3 className={styles.boxTitle2} >Buy Cards</h3>
                <div>
                    <Card/>
                    {/* <img style={{ width: 1600, height: 250, minWidth: 150, maxWidth: 180 }} className='boxPicture' src='./images/boxPicture_3.png' alt='Create your team' />
                    <div className={styles.cardButtonContainer}>
                    <button className={styles.cardButton}>DESC</button>
                    <button className={styles.cardButton}>BUY</button>
                    </div> */}
                </div>
            </div >

            
            <div className={styles.content}>

            <div className={styles.divider}></div> 
                
                <h3 className={styles.boxTitle2}>Buy Packs</h3>
                <Card/>
            </div>
        </div>
    </main>
    )
}

export default Market