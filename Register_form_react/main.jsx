import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Abc from './Abc.jsx'
import Card from './card.jsx'
import './card.css'
import Ca from './Ca.jsx'
import Car from './car.jsx'
import Hooks from './Hooks.jsx'
import Register from './Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register/>
  </StrictMode>,
)
