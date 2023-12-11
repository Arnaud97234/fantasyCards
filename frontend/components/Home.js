import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'

function Home() {
    const username = useSelector((state) => state.users.value.username)


    return (
        <div>
            <main className={styles.main}>
                <h2 className={styles.title}>Home</h2>
                <div className={styles.homeContent}>
                    <div className={styles.infoGamesContainer}>
                        <div className={styles.infoContainer}>
                            <div className={styles.infoContent}>
                                <h3 className={styles.contentTitle}>Account info</h3>
                                <span className={styles.contentItem}>Username</span>
                                <span className={styles.contentItem}>Credits</span>
                                <span className={styles.contentItem}>Ranking</span>
                            </div>
                        </div>
                        <div className={styles.gamesContainer}>
                            <h3 className={styles.contentTitle}>Games</h3>
                            <div className={styles.gamesContent}>
                                <span className={styles.contentItem}>Ongoing games</span>
                                <span className={styles.contentItem}>My events</span>
                            </div>
                            <button className={styles.homePageButton}>View more</button>
                        </div>
                    </div>
                    <div className={styles.inventoryContent}>
                        <h3 className={styles.contentTitle}>Inventory</h3>
                        <div className={styles.inventoryContent}>
                            <span className={styles.contentItem}>Total cards</span>
                            <span className={styles.contentItem}>Total packs</span>
                        </div>
                        <button className={styles.homePageButton}>View more</button>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Home