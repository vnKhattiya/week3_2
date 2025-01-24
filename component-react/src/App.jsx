import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Heroes from './components/Heroes'
import Features from './components/Features'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header/>
      <Heroes/>
      <Features/>
      <Footer/>
    </>
  )
}

export default App
