import styles from '../../styles/Header.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CardInventory from "../CardInventory";


function PackInventoryModal() {

    const userCards = useSelector((state) => state.users.value.cardsList);
    const token = useSelector((state)=> state.users.value.token)


    // const handleSetPrice = () => {
    //     fetch(`http://localhost:3000/card/sell/${token}/${subDocId}`, {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({price : price}),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //     })
    // }

    console.log('idInv',userCards[0]._id)
    const cardPlayer = userCards.map((data, i) => {
      const id = userCards.map(user => 
        user.cardPrices.find(ids => ids.userToken === token))
        console.log(id);
       ;
        return (
          <CardInventory
            key={i}
            id={id}
            playerName={data.name}
            playerImage={data.picture}
            rarity={data.rarity}
            // ModalVisibleSellCard={ModalVisibleSellCard}
          />
        );
    })



    return (
        // <div className={styles.modal}>
        //     <main className={styles.modalContainer}>
        //         <h2 className={styles.modalTitle}>OPEN</h2>
        //         <div className={styles.image}>
        //             {cardPlayer}
        //         </div>
        //         {/* <input className={styles.input} type='text' placeholder='Price' onChange={(e) => setPrice(e.target.value)} value={price} />
        //         <button className={styles.modalButton} onClick={() => handleSetPrice()}>Sell</button> */}
        //     </main>
        // </div>
        <main>
            <h2 className={styles.modalTitle}>OPEN</h2>
            <div className={styles.flexbox}>
                {cardPlayer}
            </div>
        </main>
    )
}

export default PackInventoryModal