import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "../style.css"

const Layout = ({ score, children, onRulesClick }) => {
  return (
    <div className="p-6 flex flex-col min-h-screen bg-main justify-between">
      <Header score={score} />
      <main className="flex flex-col justify-between">{children}</main>
      <Footer onRulesClick={onRulesClick} />
    </div>
  )
}

export default Layout
