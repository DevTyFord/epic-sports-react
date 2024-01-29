import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import Nav from './components/Nav';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
  </React.StrictMode>,
)
