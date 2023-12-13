import styles from '../styles/Card.module.css'


function Card(props) {

    return (
        <main>
            <div className={styles.card}>

                <div>
                    <img style={{ width: 400, height: 60, minWidth: 35, maxWidth: 45 }} className='boxPicture' src='https://media-4.api-sports.io/football/players/647.png' alt='cardPicture' />
                    <h3>{props.name}</h3>

                    <div className={styles.cardsymbol}>
                        <img style={{ width: 15, height: 15, minWidth: 15, maxWidth: 15 }} className='boxPicture' src='https://media-4.api-sports.io/football/teams/81.png' alt='Team logo' />
                        <img style={{ width: 15, height: 15, minWidth: 15, maxWidth: 15 }} className='boxPicture' src='./images/boxPicture_3.png' alt='Country' />
                    </div>
                </div>



            </div>

            <div className={styles.cardButtonContainer}>
                <button className={styles.cardButton}>DESC</button>
                <button className={styles.cardButton}>BUY</button>
            </div>
        </main>

    )
}

export default Card