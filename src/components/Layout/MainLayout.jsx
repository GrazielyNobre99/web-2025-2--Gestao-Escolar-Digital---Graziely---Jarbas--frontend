import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import './MainLayout.css'
import { Outlet } from 'react-router-dom'

export default function MainLayout({children}){
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <main className="main">
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </div>
  )
}
