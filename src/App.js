import React, { useState } from 'react'
import styled from 'styled-components'

import GlobalStyle from "./GlobalStyle";

import YourChoice from "./YourChoice";
import SaveResult from "./SaveResult";

import questionSvg from './questionSvg.svg'
import YourSavedResults from "./YourSavedResults";


  function App() {

      const [k6Choice, setK6Choice] = useState(false)
      const [k10Choice, setK10Choice] = useState(false)
      const [k20Choice, setK20Choice] = useState(false)
      const [k100Choice, setK100Choice] = useState(false)
      const [result, setResult] = useState(null)
      const [canISaveTheResult, setCanISaveTheResult] = useState(false)
      const [resultsToShow, setResultsToShow] = useState([])
      const [numberSavedResults, setNumberSavedResults] = useState(1)

      const onClickChoiceK6 = () => {
          setK6Choice(true)
          setK10Choice(false)
          setK20Choice(false)
          setK100Choice(false)
          setResult(null)
                }

      const onClickChoiceK10 = () => {
          setK6Choice(false)
          setK10Choice(true)
          setK20Choice(false)
          setK100Choice(false)
          setResult(null)
      }

      const onClickChoiceK20 = () => {
          setK6Choice(false)
          setK10Choice(false)
          setK20Choice(true)
          setK100Choice(false)
          setResult(null)
      }

      const onClickChoiceK100 = () => {
          setK6Choice(false)
          setK10Choice(false)
          setK20Choice(false)
          setK100Choice(true)
          setResult(null)
      }


    return (
        <>
          <GlobalStyle />
          <AppWrapp>
              <Header>
                  <Title>Jaką kostkę wybierasz?</Title>
                  <WrappQuestionSvg>
                      <QuestionSvgStyled  src={questionSvg} alt="questionSvg"/>
                  </WrappQuestionSvg>
              </Header>
              <WrappDicesPart>
                  <OptionsToChoice>
                      <OneOptionCard onClick={onClickChoiceK6} >k6</OneOptionCard>
                      <OneOptionCard onClick={onClickChoiceK10}>k10</OneOptionCard>
                      <OneOptionCard onClick={onClickChoiceK20}>k20</OneOptionCard>
                      <OneOptionCard onClick={onClickChoiceK100}>k100</OneOptionCard>
                  </OptionsToChoice>
                  <WrappYourChoice>
                      <YourChoice k6Choice={k6Choice} k10Choice={k10Choice} k20Choice={k20Choice} k100Choice={k100Choice} setResult={setResult}  setCanISaveTheResult={setCanISaveTheResult}/>
                      {result !== null && <Result>Wyrzuciłeś: {result}</Result>}
                  </WrappYourChoice>
              </WrappDicesPart>
              <WrappOperationsOnResults>
                     {result !== null && <SaveResult
                         result={result}
                         setResult={setResult}
                         canISaveTheResult={canISaveTheResult}
                         setCanISaveTheResult={setCanISaveTheResult}
                         resultsToShow={resultsToShow}
                         setResultsToShow={setResultsToShow}
                         numberSavedResults={numberSavedResults}
                         setNumberSavedResults={setNumberSavedResults}
                     /> }
                    <YourSavedResults resultsToShow={resultsToShow} setResultsToShow={setResultsToShow}/>
              </WrappOperationsOnResults>
          </AppWrapp>
        </>
    );
  }

  export default App;

  const AppWrapp = styled.div`
    margin: 0 auto  ;
    padding: 10px 0 40px 0;
  //border: 2px solid red;
     min-width: 375px;
    max-width: 700px;
    min-height: 100vh;
   width: 100%;
  display: flex;
  flex-direction: column;
    `

const Header = styled.div`
  padding: 0px 40px 0px 40px;
    width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Title = styled.h1`
  width: 70%;
 text-align: center; 
  align-self: flex-end;
  padding: 40px 40px 0px 40px;
   border-bottom: 2px solid #899903;
   //border: 2px solid blue;
  @media (min-width: 550px) {
    width: 72%;
    padding: 40px 10px 0px 10px;
  }
  `

const WrappQuestionSvg = styled.div`
  //border: 2px solid blue;
    width: 30%;
  @media (min-width: 550px) {
    width: 26%;;
  }
  `

const QuestionSvgStyled = styled.img`
    width: 100%;
  height: 100%;
`

const WrappDicesPart = styled.div`
  //border: 2px solid blue;
margin-top: 40px;
   padding: 0 40px 20px 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const OptionsToChoice = styled.div`
  //border: 2px solid pink;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
  }
  `

const OneOptionCard = styled.button`
   background-color: transparent;
  border: 2px solid #899903;
  width: 200px;
  height: 50px;
  padding: 10px;
  margin: 10px ;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;  
  :hover {
    transform: scale(1.2,1.2); 
  }
  :active {
    transform: scale(1.2,1.2);
    background-color: #899903; 
  }  
`

const WrappYourChoice = styled.div`
  //border: 2px solid purple;
  min-height: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
   align-items: center;
  `

const Result = styled.h2`
  //border: 2px solid purple;
   text-align: center;
  align-self: center;
  justify-self: center ;
  padding: 30px 0 10px 0  ;
  border-bottom: 2px solid #899903;
  margin-right: 10px;
  @media (min-width: 550px) {
    text-align: end;
    max-width: 50%;
    align-self: flex-end;  
         }
`

const WrappOperationsOnResults = styled.div`
//border: 2px solid darkorange;
   margin: 10px 40px 0px 40px ;
    display: flex;
  flex-direction: column;
  @media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
  }
 
`


