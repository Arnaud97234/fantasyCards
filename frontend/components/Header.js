import styles from '../styles/Header.module.css';

function Header() {
    return (
      <div>
        <main className={styles.headerContainer}>
        <img className='headerLogo' src='./images/headerLogo.svg' alt='fantasyCard' />
          <div className={styles.buttonsContainer}>
            <span className={styles.button} id='signup_button'>Sign up</span>
            <span className={styles.button} id='signin_button'>Sign in</span>
          </div>
        </main>
      </div>
    );
  }
  
  export default Header;