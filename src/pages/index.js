import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pentagon from '../images/bg-pentagon.svg'
import scissors from '../images/icon-scissors.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import lizard from '../images/icon-lizard.svg'
import spock from '../images/icon-spock.svg'

const Pentagon = () => {
  return (
    <div className="absolute self-center w-40 z-0 mt-8 mobile-m:w-48 md:w-56">
      <img src={pentagon} alt="pentagon" className="w-full h-auto" />
    </div>
  )
}

const ChoiceIcon = (props) => {
  return (
    <div className="w-6">
      <img src={
        props.choice === "scissors"
          ? scissors
          : props.choice === "paper"
            ? paper
            : props.choice === "rock"
              ? rock
              : props.choice === "lizard"
                ? lizard
                : spock
      }
        alt="choice icon"
        className="w-full h-auto m-0"
      />
    </div>
  )
}

const Choice = (props) => {
  return (
    <div className="p-2 rounded-full self-center z-10" id={props.id}>
      <div className="bg-white rounded-full p-3">
        <ChoiceIcon choice={props.choice} />
      </div>
    </div>
  )
}

const Choices = (props) => {
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
      <div className="flex justify-around mt-3 px-6 mobile-m:mt-6">
        <Choice id="lizard" choice="lizard" />
        <Choice id="rock" choice="rock" />
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Choices />
  </Layout>
)

export default IndexPage
