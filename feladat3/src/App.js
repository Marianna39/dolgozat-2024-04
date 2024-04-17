import { useState, useEffect } from 'react'
import loading from './loading.gif'
import './App.scss'


function App() {
  const [kep, setKep] = useState("");


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(data => data.json())
      .then(json => setKep({
        message: json.message,
      }))
      .catch(console.log)
  }, [])

  if (!kep) return <img src={loading} alt='Betöltés' />

  function valt(k) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(data => data.json())
      .then(json => setKep(json))
      .catch(console.log)
  }

  return (
    <div className="container">
      <h1 className='cim'>Kutyák</h1>

      <div className='keret'>

        <img className="kep" src={kep.message} alt="kutya kép" />

      </div>
      <div className='gomb'>
        <button onClick={valt}>Következő</button>
      </div>

    </div>
  )
}

export default App
