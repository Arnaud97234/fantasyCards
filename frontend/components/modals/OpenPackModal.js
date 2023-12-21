import styles from '../../styles/Header.module.css'
import { useSelector } from 'react-redux'


function SellCardModal({id, sellerToken}) {
    const token = useSelector((state)=> state.users.value.token)
    console.log(id);
    console.log(sellerToken)

    const handleBuyCard = () => {
        console.log('bonjour')
        fetch(`http://localhost:3000/pack/open/${token}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({token,id}),
        })
        .then(response => response.json())
        .then(data => {
        })
    }
    return (
        <div className={styles.modal}>
            <main className={styles.modalContainer}>
                <p>Félicitation vos venez d'obtenir 5 nouvelles cartes</p>
                <button className={styles.modalButton} onClick={handleBuyCard}>Confirm</button>
            </main>
        </div>
    )
}

export default SellCardModal