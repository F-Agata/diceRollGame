import React from 'react'
import styled from 'styled-components'


const YourSavedResults = ({ resultsToShow }) => {

    const showResults = resultsToShow.map((item, index) => (
        <WrappShowResults key={index}>
            {item}
        </WrappShowResults>
    ))

    return (
        <WrappShow5Results>
            <Title > Max 5 ostatnich zapisanych wyników:</Title>
            {resultsToShow.length > 0 && showResults}
        </WrappShow5Results>
    )
};

export default YourSavedResults


const WrappShow5Results = styled.div`
  flex-grow: 1;
  //border: 2px solid purple;
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