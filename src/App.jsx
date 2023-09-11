import { useState } from 'react'
import { Name } from './Name'
import { Presentation } from './Presentation'
import { Proyects } from './Proyects'
import { Contact } from './Contact'
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <Name />
      <Presentation />
      <Proyects />
      <Contact />
    </div>
  )
}

export default App
