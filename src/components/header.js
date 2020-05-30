import React from "react"

const Header = ({ score }) => (
  <header className="sm:w-3/4 lg:w-1/2 sm:mx-auto">
    <div className="p-2 border-2 border-header-outline rounded-md flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-white text-xs font-medium sm: text-base">ROCK</h1>
        <h1 className="text-white text-xs font-medium sm: text-base">PAPER</h1>
        <h1 className="text-white text-xs font-medium sm: text-base">SCISSORS</h1>
        <h1 className="text-white text-xs font-medium sm: text-base">LIZARD</h1>
        <h1 className="text-white text-xs font-medium sm: text-base">SPOCK</h1>
      </div>
      <div className="py-3 px-4 flex flex-col justify-center items-center bg-white rounded-md shadow-lg">
        <h1 className="text-xs text-score-text font-medium sm:text-base">SCORE</h1>
        <h1 className="text-4xl text-dark-text font-bold">{score}</h1>
      </div>
    </div>
  </header>
)

export default Header
