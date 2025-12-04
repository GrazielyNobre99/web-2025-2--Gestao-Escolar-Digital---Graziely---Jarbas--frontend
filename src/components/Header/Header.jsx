import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header(){

  const navigate = useNavigate()
  
  return (
    <header className="header">
      <h1 id="titulo">Gestão Escolar Digital</h1>
      <nav className="nav">
        <button className="button-nav" onClick={() => navigate('/inicio')}>Início</button>
        <button className="button-nav" onClick={() => navigate('/sobre')}>Sobre</button>
        <button className="button-nav" onClick={() => navigate('/contato')}>Contato</button>
      </nav>
    </header>
  )
}
