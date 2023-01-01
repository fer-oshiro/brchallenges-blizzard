import Login from '@components/Home/Banner/Modal/login'
import Banner from '@components/Home/Banner'
import Games from '@components/Home/Games'
import BattleNet from '@components/Home/BattleNet'
import Footer from '@components/common/footer'

function Home(): React.ReactElement {
  return (
    <>
      <Banner />
      <Games />
      <BattleNet />
      <Footer />
      <Login />
    </>
  )
}

export default Home
