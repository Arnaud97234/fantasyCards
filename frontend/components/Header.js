import styles from "../styles/Header.module.css";
import SignupModal from "./modals/SignupModal.js";
import SigninModal from "./modals/SigninModal.js";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../reducers/users.js";
import { Modal } from 'antd';


function Header() {
  const [signupVisible, setSignupVisible] = useState(false);
  const [signinVisible, setSigninVisible] = useState(false);
  const isConnected = useSelector((state) => state.users.value.token);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignup = () => {
    setSignupVisible(true)
  }

  const handleSignin = () => {
    setSigninVisible(true)
  }

  const handleCancelSignUp = () => {
    setSignupVisible(false);
  };

  const handleCancelSignIn = () => {
    setSigninVisible(false);
  };

  const navItems = () => {
    if (isConnected) {
      return (
        <div className={styles.navItems}>
          <button className={styles.item}>Game</button>
          <button className={styles.item}>Market</button>
          <button
            className={styles.item}
            onClick={() => {
              router.push("/inventory");
            }}
          >
            Inventory
          </button>
          <button
            className={styles.item}
            onClick={() => {
              router.push("/");
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.navItems}>
          <button
            onClick={() => {
              handleSignup();
            }}
            className={styles.item}
            id="signup_button"
          >
            Sign up
          </button>
          <button
            onClick={() => {
              handleSignin();
            }}
            className={styles.item}
            id="signin_button"
          >
            Sign in
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <main className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="./images/headerLogo.svg"
          alt="fantasyCard"
          onClick={() => {
            router.push("/home");
          }}
        />
        {navItems()}
        </main>
        <Modal width={300} centered={true} onCancel={() => handleCancelSignUp()} visible={signupVisible} footer={null}>
          <SignupModal />
        </Modal>
        <Modal width={300} centered={true} onCancel={() => handleCancelSignIn()} visible={signinVisible} footer={null}>
         <SigninModal />
        </Modal>
      </div>
    );
  }
  
  export default Header;
