import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BirthDay from './BirthDay'
import OpeningPackage from './BirthDay'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BirthDay/> */}
    <OpeningPackage/>
  </StrictMode>,
)
