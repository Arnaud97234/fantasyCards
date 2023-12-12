// import styles from '../styles/Market.module.css'
import styles from '../styles/Card.module.css'


function Card(props) {

    return (
        <main>
            <div className={styles.card}>

                <div>
                    <img style={{ width: 400, height: 60, minWidth: 35, maxWidth: 45 }} className='boxPicture' src='./images/boxPicture_3.png' alt='Create your team' />    
                    <h3>HANS SAMA</h3>
                    {/* <h3>{props.name}</h3> */}

                    <div className={styles.cardsymbol}>
                        <img style={{ width: 15, height: 15, minWidth: 15, maxWidth: 15 }} className='boxPicture' src='./images/boxPicture_3.png' alt='Create your team' />
                        <img style={{ width: 15, height: 15, minWidth: 15, maxWidth: 15 }} className='boxPicture' src='./images/boxPicture_3.png' alt='Create your team' />
                    </div>
                </div>




            </div>

            <div className={styles.cardButtonContainer}>
                <button className={styles.cardButton}>DESC</button>
                <button className={styles.cardButton}>BUY</button>
            </div>

            {/* <div class="info">
                <h3>HANS SAMA</h3>
                <p><span class="type">Electric</span></p>
                <p>HP: 60</p>
                <p>Attack: 55</p>
                <p>Defense: 40</p>
                <div className={styles.card}>
                    <img style={{ width: 25, height: 25, minWidth: 25, maxWidth: 25 }} className='boxPicture' src='./images/coco.png' alt='Create your team' />
                    <img style={{ width: 25, height: 25, minWidth: 25, maxWidth: 25 }} className='boxPicture' src='./images/coco.png' alt='Create your team' />
                </div>
            </div> */}
            
        </main>

        
        
    )
}

export default Card