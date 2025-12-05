import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiHome, FiUser, FiCalendar, FiSettings, FiList, FiAlertCircle, FiDatabase, FiFile } from 'react-icons/fi'
import './Sidebar.css'

export default function Sidebar(){
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const sidebarRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const trigger = triggerRef.current
    const sidebar = sidebarRef.current
    let timeout = null

    function onEnter() {
      clearTimeout(timeout)
      setOpen(true)
    }
    function onLeave() {
      timeout = setTimeout(()=> setOpen(false), 250)
    }

    trigger.addEventListener('mouseenter', onEnter)
    sidebar.addEventListener('mouseenter', onEnter)
    sidebar.addEventListener('mouseleave', onLeave)

    // close when moving mouse far away
    function onMove(e){
      if(!open) return
      if(e.clientX > 350 && !sidebar.matches(':hover') && !trigger.matches(':hover')) {
        setOpen(false)
      }
    }
    document.addEventListener('mousemove', onMove)

    return () => {
      trigger.removeEventListener('mouseenter', onEnter)
      sidebar.removeEventListener('mouseenter', onEnter)
      sidebar.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mousemove', onMove)
    }
  }, [open])

  return (
    <>
      <div id="sidebar-trigger" ref={triggerRef} />
      <aside id="sidebar" ref={sidebarRef} className={open ? 'open sidebar' : 'sidebar'}>
        <div className="menu-header">Menu</div>
        <ul className="menu-topicos">
          <li><button className="button-sidebar" onClick={()=>navigate('/dashboard')}><FiSettings/> Dashboard</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/alertas')}><FiAlertCircle/> Alertas</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-aluno')}><FiDatabase/> Cadastro Aluno</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-professores')}><FiDatabase/> Cadastro Professores</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-periodo-letivo')}><FiDatabase/> Cadastro Período Letivo</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-disciplina')}><FiDatabase/> Cadastro Disciplina</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-turma')}><FiDatabase/> Cadastro Turma</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/trabalhos-avaliativos')}><FiDatabase/> Trabalhos Avaliativos</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-nota')}><FiCalendar/> Cadastro Notas</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/usuarios')}><FiUser/> Usuários</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/login')}><FiUser/> Demo Tela Login</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/relatorio-notas')}><FiFile/> Relatório Notas</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/relatorio-alunos')}><FiFile/> Relatório Alunos</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/relatorio-trabalhos')}><FiFile/> Relatório Trabalhos</button></li>
        </ul>
      </aside>
    </>
  )
}
