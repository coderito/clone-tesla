import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { store } from './store'


export const App = () => {
  return (
    <Provider store={store}>
       <div className='App'>
      <Header />
      <Home />
    </div>
    </Provider>
   
  )
}
