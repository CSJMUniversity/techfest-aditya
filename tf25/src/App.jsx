import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero"

import CardList from './components/CardList'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class=" font-bold underline">
    <Hero/>
    <CardList />
    <Footer />
   
  </div>
  )
}

export default App
