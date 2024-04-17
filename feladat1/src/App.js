import { useState } from "react";

function App() {
  const [nev, setNev] = useState("")
  const [pont, setPont] = useState("")
  const [eredmeny, setEredmeny] = useState([]);
  const [message, setMessage] = useState("")

 

  function hozzaad(e) {
    e.preventDefault()
    if (nev.length < 3) {
      setMessage('A név nem lehet 3 karakternél rövidebb!')
    }
    if (100 < pont || pont < 0) {
      setMessage('A pont 0 és 100 közötti szám lehet!')
    }
    if (!szamok(pont)) {
      setMessage('A pont csak szám lehet!')
    }
    setEredmeny(eredmeny => [
      ...eredmeny,
      {
        nev,
        pont,
        id: Date.now()
      }
    ])
  }

  function szamok(s) {
    for (const c of s) {
      if (c < '0' || c > '9')
        return false
    } return true
  }

  return (
    <div className="container">
      <form action="">
        <h2>Vizsga</h2>

        <label
          className="form-label"
          htmlFor="nev"
          name="nev">Név</label>

        <input
          className="form-control"
          id="nev"
          type="text"
          value={nev}
          onChange={e => setNev(e.target.value)} />

        <label
          htmlFor="pont"
          className="form-label mt-3">Pont</label>

        <input
          className="form-control mb-3"
          id="pont"
          type="text"
          name="pont"
          value={pont}
          onChange={e => setPont(e.target.value)} />

          {message && <div className="alert alert-danger">{message}</div>}

        <button className="btn btn-primary" onClick={hozzaad}>Hozzáadás</button>
      </form>
      <div className={pont < 51 ? "text-danger" : "" }>
        {eredmeny.map(e => (
          <li key={e.id}>
            {e.nev}: {e.pont}
          </li>
        ))}
      </div>
    </div>
  )
}

export default App;
