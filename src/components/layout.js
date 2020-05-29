import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import '../styles/style.css'
import 'tailwindcss/tailwind.css'

const Layout = (props) => {
  return (
    <div className="p-8 flex flex-col min-h-screen bg-main">
      <Header />
      <main className="flex flex-col justify-between">{props.children}</main>
      <Footer onRulesClick={props.onRulesClick} />
    </div>
  )
}

export default Layout
