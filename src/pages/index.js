import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import pentagon from '../images/bg-pentagon.svg'
import scissors from '../images/icon-scissors.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import lizard from '../images/icon-lizard.svg'
import spock from '../images/icon-spock.svg'
import rules from '../images/image-rules-bonus.svg'
import closeIcon from '../images/icon-close.svg'

const RulesM = ({ isRulesHidden, onRulesClose }) => {
  return (
    <div
      className={
        isRulesHidden
          ? `hidden`
          : `absolute top-0 right-0 left-0 bottom-0 bg-white flex flex-col z-20 items-center 
          justify-between py-10 sm:mx-auto sm:my-8 sm:rounded-lg sm:w-3/4
          md:w-3/5 md:my-12`
      }
    >
      <h1 className="text-2xl font-bold">RULES</h1>
      <div className="p-6"><img src={rules} alt="rules" className="w-full h-auto" /></div>
      <button onClick={onRulesClose}><img src={closeIcon} alt="close icon" /></button>
    </div>
  )
}

const Pentagon = () => {
  return (
    <div className="absolute self-center w-40 z-0 mt-8 mobile-m:w-48 md:w-56">
      <img src={pentagon} alt="pentagon" className="w-full h-auto" />
    </div>
  )
}

const ChoiceIcon = ({ choice }) => {
  return (
    <div className="w-6">
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

const Choice = ({ choice, id }) => {
  return (
    <button
      className="border-none p-2 rounded-full self-center z-10 focus:outline-none"
      id={id}
      onClick={() => alert(choice)}
    >
      <div className={
        choice === "spock" || choice === "paper"
          ? "bg-white rounded-full py-2 px-3"
          : "bg-white rounded-full p-3"
      }
      >
        <ChoiceIcon choice={choice} />
      </div>
    </button>
  )
}

const Choices = ({ onChoice }) => {
  return (
    <div className="flex flex-col my-16 sm:w-3/4 lg:w-1/2 sm:mx-auto">
      <Pentagon />
      <div className="flex justify-center">
        <Choice id="scissors" choice="scissors" />
      </div>
      <div className="flex justify-around">
        <Choice id="spock" choice="spock" />
        <Choice id="paper" choice="paper" />
      </div>
      <div className="flex justify-around mt-3 px-6 mobile-m:mt-8 sm:px-10 md:px-16 md:mt-16">
        <Choice id="lizard" choice="lizard" />
        <Choice id="rock" choice="rock" />
      </div>
    </div>
  )
}

const IndexPage = () => {
  const [isRulesHidden, setIsRulesHidden] = useState(true);

  return (
    <Layout onRulesClick={() => setIsRulesHidden(false)}>
      <RulesM isRulesHidden={isRulesHidden} onRulesClose={() => setIsRulesHidden(true)} />
      <SEO title="Home" />
      <Choices />
    </Layout>
  )
}

export default IndexPage
