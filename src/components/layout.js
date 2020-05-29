import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import 'tailwindcss/tailwind.css'

const Layout = ({ children }) => {

  return (
    <div className="p-8 flex flex-col min-h-screen bg-main">
      <Header />
      <main className="flex flex-col justify-between">{children}</main>
      <Footer />
    </div>
  )
}



export default Layout
