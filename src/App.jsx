
import './App.css'

import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { News } from './sections/News'
import { Footer } from './sections/Footer'
import { Careers } from './sections/Careers'

// Supports weights 300-800
import '@fontsource-variable/open-sans';


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Careers />
      <News />
      <Footer />
    </>
  )
}

export default App
