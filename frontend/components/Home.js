import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function Home() {
    const [username, setUsername] = useState('')
    const [credits, setCredits] = useState(0)

    const userToken = useSelector((state) => state.users.value.token)
    
    fetch(`http://localhost:3000/users/user/${userToken}`).then(response => response.json()).then(data => {
        setUsername(data.username)
        setCredits(data.credits)
    })

    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>Home</h2>
                <div className={styles.homeContent}>
                    <div className={styles.infoGamesContainer}>
                        <div className={styles.box} id={styles.infoBox}>
                            <h3 className={styles.contentTitle}>Account info</h3>
                            <div className={styles.content}>
                                <span className={styles.contentItem}>Username: {username}</span>
                                <span className={styles.contentItem}>Credits: {credits}</span>
                                <span className={styles.contentItem}>Ranking</span>
                            </div>
                        </div>
                        <div className={styles.box} id={styles.gameBox}>
                            <h3 className={styles.contentTitle}>Games</h3>
                            <div className={styles.content}>
                                <span className={styles.contentItem}>Ongoing games</span>
                                <span className={styles.contentItem}>My events</span>
                            </div>
                            <button className={styles.contentButton}>View more</button>
                        </div>
                    </div>
                    <div className={styles.box} id={styles.inventoryBox}>
                        <h3 className={styles.contentTitle}>Inventory</h3>
                        <div className={styles.content}>
                            <span className={styles.contentItem}>Total cards</span>
                            <span className={styles.contentItem}>Total packs</span>
                        </div>
                        <button className={styles.contentButton}>View more</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home