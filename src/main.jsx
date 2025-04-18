import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HomeDark } from './screens/HomeDark/HomeDark'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
