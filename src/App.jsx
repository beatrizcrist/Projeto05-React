import { useState } from 'react'
import './App.css'

function App() {
  let tempo = new Date().toLocaleTimeString()
  let dia = new Date().getDate()
  let mes = new Date().getMonth()
  let ano = new Date().getFullYear()

  const [ctempo, setTempo] = useState(tempo)

  const UpdateTempo = () => {
    tempo = new Date().toLocaleTimeString()
    setTempo(tempo)
  }

  setInterval(UpdateTempo, 1000)
  
  return (
    <>
    <h2>{dia}/{mes}/{ano}</h2>
    <h1> {ctempo} </h1>
    </>
  )
}

export default App
