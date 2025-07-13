
import './App.css'
import DogServices from './components/DogServices'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Shop from './components/Shop'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className='overflow-hidden'>
        <Nav />
        <Hero />
        <Shop />
        <DogServices />
        <Location/>
        <Footer/>
      </div>
    </>
  )
}

export default App
