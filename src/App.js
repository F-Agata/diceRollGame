import React, { useState } from 'react'
import styled from 'styled-components'

import GlobalStyle from "./GlobalStyle";

import YourChoice from "./YourChoice";

import questionSvg from './questionSvg.svg'


  function App() {

      const [k6Choice, setK6Choice] = useState(false)
      const [k10Choice, setK10Choice] = useState(false)
      const [k20Choice, setK20Choice] = useState(false)
      const [k100Choice, setK100Choice] = useState(false)
      const [result, setResult] = useState(123)

      const onClickChoiceK6 = () => {
          setK6Choice(true)
          setK10Choice(false)
          setK20Choice(false)
          setK100Choice(false)
                }

      const onClickChoiceK10 = () => {
          setK6Choice(false)
          setK10Choice(true)
          setK20Choice(false)
          setK100Choice(false)
      }

      const onClickChoiceK20 = () => {
          setK6Choice(false)
          setK10Choice(false)
          setK20Choice(true)
          setK100Choice(false)
      }

      const onClickChoiceK100 = () => {
          setK6Choice(false)
          setK10Choice(false)
          setK20Choice(false)
          setK100Choice(true)
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
                      <YourChoice k6Choice={k6Choice} k10Choice={k10Choice} k20Choice={k20Choice} k100Choice={k100Choice} setResult={setResult}/>
                      {result !== null && <Result>Wyrzuciłeś: {result}</Result>}
                  </WrappYourChoice>

              </WrappDicesPart>
          </AppWrapp>
        </>
    );
  }

  export default App;

  const AppWrapp = styled.div`
    margin: 0 auto  ;
  //border: 2px solid red;
     min-width: 375px;
    max-width: 700px;
  min-height: 200vh;
  width: 100%;
  display: flex;
  flex-direction: column;
    `

const Header = styled.div`
  padding: 20px 40px 0px 40px;
    width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Title = styled.h1`
  width: 100%;
 text-align: center; 
  align-self: flex-end;
  padding: 40px 40px 0px 40px;
   border-bottom: 2px solid #899903;
   //border: 2px solid blue;
  @media (min-width: 520px) {
    width: 50%;;
  }
  `
const WrappQuestionSvg = styled.div`
  //border: 2px solid blue;
    width: 100%;
  @media (min-width: 520px) {
    width: 30%;;
  }
`
const QuestionSvgStyled = styled.img`
    width: 100%;
  height: 100%;
`

const WrappDicesPart = styled.div`
  //border: 2px solid blue;
margin-top: 40px;
   padding: 0 40px 40px 40px;
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
  @media (min-width: 530px) {
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
  width: 100%;
  display: flex;
  flex-direction: column;
   align-items: center;
  height: 300px;
 
`

const Result = styled.h2`
  width: 60%;
   text-align: center;
  align-self: center;
  justify-self: center ;
  padding: 20px 0 10px 0  ;
  border-bottom: 2px solid #899903;
  //border: 2px solid blue;
  @media (min-width: 530px) {
    text-align: end;
    width: 40%;
    align-self: flex-end;  
         }
`

