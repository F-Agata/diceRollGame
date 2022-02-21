import React, {useEffect} from 'react'
import styled from 'styled-components'

import { helpersFunctionMakeArrayResults } from './helpersFunctionMakeArrayResults'


const YourSavedResults = ({ resultsToShow, setResultsToShow}) => {

    useEffect(()=>{
        helpersFunctionMakeArrayResults(setResultsToShow)
    },[])

    const showResults = resultsToShow.map((item, index) => (
        <WrappShowResults key={index}>
            {item}
        </WrappShowResults>
    ))

    return (
        <WrappShow5Results>
            <Title > Max 5 ostatnich zapisanych wyników:</Title>
            {localStorage.length !== 0 ? showResults : <AnyMessagesSavedResults> Nie masz zapisanych żadnych wyników </AnyMessagesSavedResults>}
        </WrappShow5Results>
    )
};

export default YourSavedResults


const WrappShow5Results = styled.div`
  //border: 2px solid purple;
  flex-grow: 1;
  order: 2;
  @media (min-width: 550px) {
    order: 1;
  }
`
const WrappShowResults = styled.p`
display: block;
  line-height: 20px;
  padding: 10px 20px;
  font-size: 20px;
  text-align: center;
 `

const Title = styled.h3`
  margin-top: 10px;
  background-color: transparent;
  border: 2px solid #899903;
  line-height: 20px;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  `

const AnyMessagesSavedResults = styled.p`
  margin-top: 10px;
  background-color: transparent;
  line-height: 20px;
  padding: 10px 10px;
  font-size: 20px;
  text-align: center;
`