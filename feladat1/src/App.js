import { useState } from "react";

function App() {
  const [nev, setNev] = useState("")
  const [pont, setPont] = useState("")
  const [eredmeny, setEredmeny] = useState([]);
  const [message, setMessage] = useState("")



  function hozzaad(e) {
    e.preventDefault()
    if (nev.length < 3 || !nev) {
      setMessage('A név nem lehet 3 karakternél rövidebb!')
      return false
    }

    if (100 < pont || pont < 0 || !pont) {
      setMessage('A pont 0 és 100 közötti szám lehet!')
      return false
    }

    if (!szamok(pont)) {
      setMessage('A pont 0 és 100 közötti szám lehet!')
      return false
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
      <div className="row">
        <div className="col-md-6">
          <form className="form" onSubmit={hozzaad}>
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
              type="number"
              name="pont"
              value={pont}
              onChange={e => setPont(e.target.value)} />

            {message && <div className="alert alert-danger">{message}</div>}

            <button type="submit" className="btn btn-primary">Hozzáadás</button>
          </form>
          <div>
            {eredmeny.map(e => (
              <li key={e.id} className={e.pont < 51 ? "text-danger" : ""}>
                {e.nev}: {e.pont}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
