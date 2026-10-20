import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const namaKantin = "Danu";
  const N = 37
  const jam = 9

  
  return (
    <>
      <h1 className="judul">{namaKantin}</h1>
      <p>Selamat {jam < 12 ? 'pagi' : 'siang'}</p>
      <p>{`Saldo Awal kartu kantin:  ${N * 1000}`}</p>
      <button disabled> Bayar </button>
      
    </>
  )
} 

export default App
