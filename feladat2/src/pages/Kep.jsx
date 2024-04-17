import React from 'react'
import { Link } from 'react-router-dom'

export default function Kep() {
    return (

        <div className='container'>
            <header>
                <div className="row">
                    <h1 className='col text-center'>Balatoni kilátók</h1>
                </div>
                <nav className='nav bg-dark justify-content-center'>
                    <Link className='nav-link link-light' to="/">Kezdőlap</Link>
                    <Link className='nav-link link-light' to="/kilatok">Kilátók</Link>
                    <Link className='nav-link link-light' to="/kepek">Képek</Link>
                </nav>
            </header>
            <div className='row'>
                <img className="card col-md-6" src="./kepek/1_bokkhegy.jpg" alt="bokkhegy" />
                <img className="card col-md-6" src="./kepek/2_cserehegy.jpg" alt="cserehegy" />
                <img className="card col-md-6" src="./kepek/3_somlyohegy.jpg" alt="somlyohegy" />
                <img className="card col-md-6" src="./kepek/4_kisfaludy.jpg" alt="kisfaludy" />
                <img className="card col-md-6" src="./kepek/5_folly.jpg" alt="folly" />
                <img className="card col-md-6" src="./kepek/6_ovari.jpg" alt="ovari" />
            </div>
        </div>
    )
}
