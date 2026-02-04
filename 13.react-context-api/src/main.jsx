import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './context/ThemeProvider.jsx'
import WishlistProvider from './context/WishlistProvider.jsx'
import BasketProvider from './context/BasketProvider.jsx'
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <BasketProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </BasketProvider>
    </ThemeProvider>
  </BrowserRouter>
)
