import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Aboutme from './AboutMe.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<Aboutme />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
