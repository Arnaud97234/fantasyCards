import styles from '../styles/Header.module.css'
import SignupModal from './modals/SignupModal.js'
import { useState, useEffect } from 'react'

function Header() {

  const [isVisible, setIsVisible] = useState(false)

  const handleSignup = () => {
    setIsVisible(!isVisible)
  }

    return (
      <div>
        <main className={styles.headerContainer}>
        <img className='headerLogo' src='./images/headerLogo.svg' alt='fantasyCard' />
          <div className={styles.buttonsContainer}>
            <button onClick={() => {
              handleSignup()
              }} className={styles.button} id='signup_button'>Sign up</button>
            <button className={styles.button} id='signin_button'>Sign in</button>
          </div>
        </main>
        {isVisible && <SignupModal />}
      </div>
    );
  }
  
  export default Header;