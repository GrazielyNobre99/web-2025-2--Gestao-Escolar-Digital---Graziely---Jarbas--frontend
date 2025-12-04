import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiHome, FiUser, FiCalendar, FiSettings, FiList } from 'react-icons/fi'
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
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-aluno')}><FiHome/> Cadastro Aluno</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-disciplina')}><FiList/> Cadastro Disciplina</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-turma')}><FiUser/> Cadastro Turma</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-nota')}><FiCalendar/> Cadastro Notas</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/relatorio-notas')}><FiSettings/> Relatório Notas</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/relatorio-alunos')}><FiSettings/> Relatório Alunos</button></li>
        </ul>
      </aside>
    </>
  )
}
