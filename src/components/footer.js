import React from "react"

const Footer = (props) => (
  <footer className="w-full flex flex-col">
    <button
      className="bg-transparent py-2 px-6 rounded-md border-2 border-white self-center lg:self-end"
      onClick={props.onRulesClick}
    >
      <h1 className="text-white text-xs tracking-widest font-medium">RULES</h1>
    </button>
  </footer>
)

export default Footer
