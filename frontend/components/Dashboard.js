import styles from '../styles/Dashboard.module.css'
import { useSelector } from 'react-redux'

function Dashboard() {
    const username = useSelector((state) => state.users.value.username)

    return (
    <main className={styles.dashboardContainer}>
        <h2 className={styles.title}>Dashboard</h2>
        <p>Welcome {username}</p>
    </main>
    )
}

export default Dashboard