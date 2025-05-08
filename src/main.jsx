import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.js"
import './index.css'
 import App from './App.jsx'
// import Attrribut from './components/Attrribut.'
// import Even from './components/Even'
// import IF from "./components/IF.jsx";
// import Count from './components/Count'
//import Agument from './components/Agument'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
