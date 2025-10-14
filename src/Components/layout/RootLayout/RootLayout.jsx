import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
