import {  } from 'react'
import './App.scss'
import { Create } from './Components/Create'
import bg from '../src/assets/assets/bg-mobile-light.jpg'
import { Header } from './Components/Header'
import { List } from './Components/List'
import bgd from './assets/assets/bg-desktop-light.jpg'

function App() {

  return (
    <div className="app">
      <div className="hero">
        <img src={bgd} className='bg-desktop' alt="background image" />
        <img src={bg} className='bg-mobile' alt="background image" />
      </div>
      <div className="content">
      <Header />
      <Create />
      <List />
      </div>
    </div>
  )
}

export default App
