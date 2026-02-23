import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import BasketProvider from './context/BasketProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <BasketProvider>
      <App />
    </BasketProvider>
  </BrowserRouter>,
) 
