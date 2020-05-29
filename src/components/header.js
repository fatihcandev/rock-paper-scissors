import React from "react"

const Header = () => (
  <header className="sm:w-3/4 lg:w-1/2 sm:mx-auto">
    <div className="p-4 border-2 border-header-outline rounded-md flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-white text-xs font-medium">ROCK</h1>
        <h1 className="text-white text-xs font-medium">PAPER</h1>
        <h1 className="text-white text-xs font-medium">SCISSORS</h1>
        <h1 className="text-white text-xs font-medium">LIZARD</h1>
        <h1 className="text-white text-xs font-medium">SPOCK</h1>
      </div>
      <div className="py-3 px-4 flex flex-col justify-center items-center bg-white rounded-md shadow-lg">
        <h1 className="text-xs text-score-text font-medium">SCORE</h1>
        <h1 className="text-4xl text-dark-text font-bold">12</h1>
      </div>
    </div>
  </header>
)

export default Header
