import Home from '../components/Home'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

function Index() {
  useSelector((state) => {
    console.log(state)
    if (state.users.value.token) {
        window.location.href='/dashboard'
    }
})
  return (
    <>
    <Header />
    <Home />
  </>
  )
}

export default Index;
