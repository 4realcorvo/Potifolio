import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './components/Menu.jsx'
import QuemSouEu from './components/QuemSouEu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <QuemSouEu />
  </React.StrictMode>,
)
