import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar.tsx"
import Footer from "./Footer.tsx"

function SharedLayout() {
  return (
    <div>
        <Navbar />

            <Outlet />

        <Footer />
    </div>
  )
}

export default SharedLayout