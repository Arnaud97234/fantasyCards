import Login from '../components/Login'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

function Index() {
  useSelector((state) => {
    console.log(state)
    if (state.users.value.token) {
        window.location.href='/home'
    }
})
  return (
    <>
    <Header />
    <Login />
  </>
  )
}

export default Index;
