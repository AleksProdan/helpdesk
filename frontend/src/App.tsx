import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <header>
        <h1>HelpDesk</h1>
        <p>Internes Ticketsystem</p>
      </header>

      <main>
        <h2>Willkommen</h2>
        <p>Hier werden zukünftig deine Tickets angezeigt.</p>

        <button>Neues Ticket erstellen</button>
      </main>
    </div>
  )
}

export default App