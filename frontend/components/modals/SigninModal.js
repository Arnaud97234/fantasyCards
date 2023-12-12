import styles from '../../styles/Header.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../reducers/users'
import { useRouter } from "next/router";

function SigninModal() {
    const [signinPassword, setSigninPassword] = useState('')
    const [signinEmail, setSigninEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const router = useRouter();

    const dispatch = useDispatch()
    const addUser = (user) => {
        dispatch(login(user))
    }

    const handleSignin = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: signinEmail, password: signinPassword }),
        })
        .then(response => response.json())
        .then(data => {
            if(data.result) {
                setSigninEmail('')
                setSigninPassword('')
                console.log(data.cardsList)
                addUser({ token: data.token, email: signinEmail, username: data.username, cardsList: data.cardsList })
                router.push("/home");
            } else {
                setErrorMessage(data.error)
            }
        })
    }
    const state = useSelector((state) => state.users.value)
    return (
        <div className={styles.modal}>
            <main className={styles.modalContainer}>
                {/* <button className={styles.closeModalButton}>X</button> */}
                <h2 className={styles.modalTitle}>Sign in</h2>
                <input className={styles.input} type='text' placeholder='email address' onChange={(e) => setSigninEmail(e.target.value)} value={signinEmail} />
                <input className={styles.input} type='password' placeholder='password' onChange={(e) => setSigninPassword(e.target.value)} value={signinPassword} />
                <button className={styles.modalButton} onClick={() => handleSignin()}>Sign in</button>
                {errorMessage != '' && <span className={styles.error}>{errorMessage}</span>}
            </main>
        </div>
    )
}

export default SigninModal