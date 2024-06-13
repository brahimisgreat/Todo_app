import './App.css'
import bg from './assets/images/bg-mobile-light.jpg'
import { Header } from './components/Header'

function App() {

  return (
   <div className='app'>
    <div className='hero'><img src={bg}></img></div>
    <Header />
    
   </div>
  )
}

export default App
