import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'

export const App = () => {
  return (
    <p className='App'>
      <Header />
      <Home />
    </p>
  )
}
