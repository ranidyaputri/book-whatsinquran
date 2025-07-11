import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/landing/hero'
import Book from './components/landing/book'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Book />
      <Footer />
    </>
  )
}

export default App
