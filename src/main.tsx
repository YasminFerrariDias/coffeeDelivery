import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { Success } from './pages/Success/index.tsx'
import { Checkout } from './pages/Checkout/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='payment' element={<Checkout />} />
          <Route path='success' element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
