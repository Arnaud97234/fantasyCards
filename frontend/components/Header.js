import styles from '../styles/Header.module.css'
import SignupModal from './modals/SignupModal.js'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Header() {

  const [isVisible, setIsVisible] = useState(false)
  const isConnected = useSelector((state) => state.users.value.token)

  const handleSignup = () => {
    setIsVisible(!isVisible)
  }

  const navItems = () => {
    if(isConnected) {
     return(
      <div className={styles.navItems}>
        <button className={styles.item}>Game</button>
        <button className={styles.item}>Market</button>
        <button className={styles.item}>Inventory</button>
      </div>
     )
    } else {
      return(
    <div className={styles.navItems}>
            <button onClick={() => {
              handleSignup()
              }} className={styles.item} id='signup_button'>Sign up</button>
            <button className={styles.item} id='signin_button'>Sign in</button>
          </div>)
    }
  }

    return (
      <div>
        <main className={styles.headerContainer}>
        <img className='headerLogo' src='./images/headerLogo.svg' alt='fantasyCard' />
        {navItems()}
        </main>
        {isVisible && <SignupModal />}
      </div>
    );
  }
  
  export default Header;