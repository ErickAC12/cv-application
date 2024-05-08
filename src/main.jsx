import React from 'react'
import ReactDOM from 'react-dom/client'
import { CVInput, CV } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CVInput />
    <CV />
  </React.StrictMode>,
)
