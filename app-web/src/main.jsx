import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContactoContextProvider } from './context/ContactoContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactoContextProvider>
      <App />
    </ContactoContextProvider>
  </React.StrictMode>,
)
