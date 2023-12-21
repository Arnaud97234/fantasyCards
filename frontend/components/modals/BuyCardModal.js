import styles from '../../styles/Header.module.css'
import { useSelector } from 'react-redux'


function SellCardModal({id, sellerToken}) {
    const token = useSelector((state)=> state.users.value.token)
    console.log(id);
    console.log(sellerToken)

    const handleBuyCard = () => {
        console.log('bonjour')
        fetch(`http://localhost:3000/card/buy/${token}/${sellerToken}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({token,sellerToken,id}),
        })
        .then(response => response.json())
        .then(data => {
        })
    }
    return (
        <div className={styles.modal}>
            <main className={styles.modalContainer}>
                <button className={styles.modalButton} onClick={handleBuyCard}>Confirm</button>
            </main>
        </div>
    )
}

export default SellCardModal