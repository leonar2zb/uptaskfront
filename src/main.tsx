import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold text-blue-600 underline">Hola prueba Tailwind</h1>
  </StrictMode>,
)
