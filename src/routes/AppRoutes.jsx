import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import CadastroAluno from '../pages/CadastroAluno/CadastroAluno'
import Sobre from "../pages/Nav/Sobre"
import Inicio from "../pages/Nav/Inicio"
import Contato from "../pages/Nav/Contato"
import CadastroProfessores from "../pages/CadastroProfessores/CadastroProfessores"

export default function AppRoutes(){
  return (
    <Routes>

      {/* Layout principal */}
      <Route path="/" element={<MainLayout />}>

        {/* Redireciona / para /cadastro-aluno */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="sobre" element={<Sobre />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="contato" element={<Contato />} />
        <Route path="cadastro-aluno" element={<CadastroAluno />} />
        <Route path="cadastro-professores" element={<CadastroProfessores />} />

        {/* 404 relacionado ao layout */}
        <Route path="*" element={<div style={{ padding: 20 }}>Página não encontrada</div>} />
      </Route>

    </Routes>
  )
}
