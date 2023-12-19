import styles from '../../styles/Header.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'


function SellPackModal({id}) {
    const [price, setPrice] = useState('')
    const token = useSelector((state)=> state.users.value.token)

    const handleSetPrice = () => {
        fetch(`http://localhost:3000/pack/sell/${token}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({price : price}),
        })
        .then(response => response.json())
        .then(data => {
        })
    }
    return (
        <div className={styles.modal}>
            <main className={styles.modalContainer}>
                <h2 className={styles.modalTitle}>Sell your pack</h2>
                <input className={styles.input} type='text' placeholder='Price' onChange={(e) => setPrice(e.target.value)} value={price} />
                <button className={styles.modalButton} onClick={() => handleSetPrice()}>Sell</button>
            </main>
        </div>
    )
}

export default SellPackModal