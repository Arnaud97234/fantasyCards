import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'

function Home() {
    const username = useSelector((state) => state.users.value.username)

    return (
    <main className={styles.dashboardContainer}>
        <h2 className={styles.title}>Dashboard</h2>
        <p>Welcome {username}</p>
    </main>
    )
}

export default Home