import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pentagon from "../images/bg-pentagon.svg"
import scissors from "../images/icon-scissors.svg"
import paper from "../images/icon-paper.svg"
import rock from "../images/icon-rock.svg"
import lizard from "../images/icon-lizard.svg"
import spock from "../images/icon-spock.svg"
import rules from "../images/image-rules-bonus.svg"
import closeIcon from "../images/icon-close.svg"
import { checkResult } from "../helpers/result-func"

const Rules = ({ isRulesHidden, onRulesClose }) => {
  return (
    <div className={
      isRulesHidden
        ? "hidden"
        : "min-h-screen absolute bg-black bg-opacity-50 top-0 right-0 left-0 bottom-0 z-20 flex"
    }
    >
      <div
        className="h-full bg-white flex flex-col items-center 
          justify-between py-10 sm:self-center sm:h-auto sm:mx-auto sm:rounded-lg sm:w-3/4  sm:flex-row 
          sm:flex-wrap sm:justify-around
          md:w-3/5 md:py-4
          lg:w-88"
      >
        <h1 className="text-2xl font-bold order-1">RULES</h1>
        <div className="p-6 order-2 sm:order-3">
          <img src={rules} alt="rules" className="w-full h-auto" />
        </div>
        <button
          onClick={onRulesClose}
          className="order-3 sm:order-2"
        >
          <img src={closeIcon} alt="close icon" className="m-0" />
        </button>
      </div>
    </div>
  )
}

const Pentagon = () => {
  return (
    <div className="absolute self-center w-40 z-0 mt-8 mobile-m:w-48 lg:w-72">
      <img src={pentagon} alt="pentagon" className="w-full h-auto" />
    </div>
  )
}

const ChoiceIcon = ({ choice, isResult }) => {
  return (
    <div
      className={
        isResult
          ? "w-12 lg:w-16"
          : "w-6 lg:w-8"
      }>
      <img src={
        choice === "scissors"
          ? scissors
          : choice === "paper"
            ? paper
            : choice === "rock"
              ? rock
              : choice === "lizard"
                ? lizard
                : spock
      }
        alt="choice icon"
        className="w-full h-auto m-0"
      />
    </div>
  )
}

const Choice = ({ choice, id, onChoice, isResult }) => {

  return (
    <button
      className={
        isResult
          ? "border-none p-2 rounded-full self-center z-10 focus:outline-none p-6 shadow-lg"
          : "border-none p-2 rounded-full self-center z-10 focus:outline-none lg:p-3 shadow-lg"

      }
      id={id}
      onClick={() => onChoice(choice)}
    >
      <div className={
        (choice === "spock" || choice === "paper") && isResult === false
          ? "bg-white rounded-full py-2 px-3 lg:py-3 lg:px-4"
          : (choice === "spock" || choice === "paper") && isResult
            ? "bg-white rounded-full py-4 px-6 lg:py-8 lg:px-10"
            : isResult
              ? "bg-white rounded-full p-6 lg:p-10"
              : "bg-white rounded-full p-3 lg:p-4"
      }
      >
        <ChoiceIcon choice={choice} isResult={isResult} />
      </div>
    </button>
  )
}

const Choices = ({ onChoice }) => {
  return (
    <div className="flex flex-col sm:mx-auto sm:w-3/4 lg:w-1/2 mt-4">
      <Pentagon />
      <div className="flex justify-center">
        <Choice id="scissors" choice="scissors" onChoice={onChoice} isResult={false} />
      </div>
      <div className="flex justify-between px-6 mobile-m:px-8 sm:px-12 md:px-20 lg:px-6 xl:px-20 ultra:px-24">
        <Choice id="spock" choice="spock" onChoice={onChoice} isResult={false} />
        <Choice id="paper" choice="paper" onChoice={onChoice} isResult={false} />
      </div>
      <div className="flex justify-around mt-3 px-6 mobile-m:mt-8 sm:px-16 md:px-20 
      lg:px-4 lg:mt-12 xl:px-16 ultra:px-24">
        <Choice id="lizard" choice="lizard" onChoice={onChoice} isResult={false} />
        <Choice id="rock" choice="rock" onChoice={onChoice} isResult={false} />
      </div>
    </div>
  )
}

const PlayerChoice = ({ choice, isResult }) => {
  return (
    <div className="flex flex-col items-center order-1">
      <Choice choice={choice} id={choice} isResult={isResult} />
      <h1 className="font-sm font-medium text-white mt-4">YOU PICKED</h1>
    </div>
  )
}

const VersusChoice = ({ versusChoice, isResult }) => {
  return (
    <div className="flex flex-col items-center order-2 lg:order-3">
      <Choice choice={versusChoice} id={versusChoice} isResult={isResult} />
      <h1 className="text-lg font-medium text-white mt-4">THE HOUSE PICKED</h1>
    </div>
  )
}

const ResultText = ({ result, onAgainClick }) => {

  return (
    <div className="flex flex-col items-center order-3 lg:order-2">
      <h1 className="text-5xl font-medium text-white mt-4 mb-6">
        {result}
      </h1>
      <button
        className="rounded-lg shadow-lg bg-white text-center w-full py-4"
        onClick={onAgainClick}
      >
        <h1 className="font-medium text-dark-text font-lg tracking-widest">PLAY AGAIN</h1>
      </button>
    </div>
  )
}

const Result = ({ choice, versusChoice, onAgainClick }) => {


  return (
    <div
      className="flex flex-wrap justify-around items-center sm:mx-auto sm:w-3/4"
    >
      <PlayerChoice choice={choice} isResult={true} />
      {
        versusChoice === ""
          ? <h1 className="text-lg font-medium text-white order-2">Wait a second...</h1>
          : <VersusChoice versusChoice={versusChoice} isResult={true} />
      }
      {
        versusChoice === ""
          ? "" :
          <ResultText choice={choice} versusChoice={versusChoice} onAgainClick={onAgainClick}
            result={checkResult(choice, versusChoice)} />
      }
    </div>
  )
}

const IndexPage = () => {
  const [isRulesHidden, setIsRulesHidden] = useState(true);
  const [choice, setChoice] = useState("");
  const [versusChoice, setVersusChoice] = useState("");
  const [score, setScore] = useState(0);

  const handleAgainClick = () => {
    setChoice("");
    setVersusChoice("");
  }

  const handleChoice = (choice) => {
    setChoice(choice);
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * Math.floor(choices.length));
    const versusChoice = choices[randomNumber];
    setTimeout(() => setVersusChoice(versusChoice), 1500);
  }

  return (
    <Layout onRulesClick={() => setIsRulesHidden(false)} score={score}>
      <Rules isRulesHidden={isRulesHidden} onRulesClose={() => setIsRulesHidden(true)} />
      <SEO title="Home" />
      {
        choice !== ""
          ? <Result choice={choice} versusChoice={versusChoice} onAgainClick={handleAgainClick}
          />
          : <Choices onChoice={handleChoice} />
      }
    </Layout>
  )
}

export default IndexPage
