import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <header>
                        <h1 className='mx-auto'>Balatoni kilátók</h1>
                        <nav className='nav bg-dark justify-content-center'>
                            <Link className='nav-link link-light' to="/">Kezdőlap</Link>
                            <Link className='nav-link link-light' to="/kilatok">Kilátók</Link>
                            <Link className='nav-link link-light' to="/kepek">Képek</Link>
                        </nav>
                    </header>
                </div>
            </div>

            <main>
                <div className='card'>
                    <p>A Balaton környékén az utóbbi időben gombamódra szaporodnak az épített balatoni kilátók, amelyeket ha megmászunk, csodás kilátás nyílik a tóra és a part menti térségre.</p>
                    <p>A kilátók többsége csak gyalog közelíthető meg, de szinte mindegyikhez feltolhatjuk a bringánkat.</p>
                    <p>Ezeken túl természetesen rengeteg olyan hely is található, mely kilátó nélkül is nagyszerű panorámát kínál.</p>
                </div>
            </main>
            <footer>
                <p className='alert alert-dark'>Készítette: Burai Marianna</p>
            </footer>

        </div>
    )
}
