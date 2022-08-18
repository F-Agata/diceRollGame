import React from 'react'
import styled from 'styled-components'
import { helpersFunctionMakeArrayResults } from './helpersFunctionMakeArrayResults'

const SaveResult = ({
  result,
  setResult,
  canISaveTheResult,
  setCanISaveTheResult,
  setResultsToShow,
  numberSavedResults,
  setNumberSavedResults,
}) => {
  const onClickSaveYourResults = () => {
    if (numberSavedResults < 5) {
      setNumberSavedResults(
        (prevNumberSavedResults) => prevNumberSavedResults + 1,
      )
    } else {
      setNumberSavedResults(1)
    }

    localStorage.removeItem(numberSavedResults)
    localStorage.setItem(numberSavedResults, result)

    helpersFunctionMakeArrayResults(setResultsToShow)

    setCanISaveTheResult(false)
  }

  const onClickDeleteAllResults = () => {
    localStorage.clear()
    setResult(null)
    setNumberSavedResults(1)
    setResultsToShow([])
  }

  return (
    <WrappBtn>
      <SaveResultBtn onClick={onClickDeleteAllResults}>
        {' '}
        Wyczyść listę zapisanych wyników
      </SaveResultBtn>
      {canISaveTheResult && (
        <SaveResultBtn onClick={onClickSaveYourResults}>
          {' '}
          Zapisz wynik
        </SaveResultBtn>
      )}
    </WrappBtn>
  )
}

export default SaveResult

const WrappBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  order: 1;
  @media (min-width: 550px) {
    order: 2;
    align-items: flex-end;
  }
`

const SaveResultBtn = styled.button`
  width: 177px;
  margin: 10px 10px 0px 40px ;
  background-color: transparent;
  border: 2px solid #899903;
  line-height: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  align-self: center;
  :hover {
    transform: scale(1.2,1.2);
  }
   @media (min-width: 550px) {
    align-self: flex-end;
  
  `
