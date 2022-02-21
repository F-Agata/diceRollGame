import React, {useEffect, useState} from 'react'
import styled from 'styled-components'


const SaveResult = ({ result, setResult, canISaveTheResult, setCanISaveTheResult, resultsToShow, setResultsToShow }) => {


  const [numberSavedResults, setNumberSavedResults] = useState(1)



  const  onClickSaveYourResults = () => {
           if (numberSavedResults < 5) {
            setNumberSavedResults(prevNumberSavedResults => prevNumberSavedResults + 1);
           } else {
          setNumberSavedResults(1)
                  }

      localStorage.removeItem(numberSavedResults)
    localStorage.setItem(numberSavedResults, result)

      let resultsArray = [];

      console.log(localStorage)
      for (let i = 0; i < localStorage.length; i++) {
          // let key = localStorage.key(i);
          // let value = localStorage.getItem(key);
          let value = localStorage.getItem(i+1);

          resultsArray.push(value);
      };

      console.log('resultsArray', resultsArray)
      setResultsToShow(resultsArray)
      setCanISaveTheResult(false)
    }

    //
    // useEffect(()=>{
    //     let resultsArray = [];
    //
    //     console.log(localStorage)
    //     for (let i = 0; i < localStorage.length; i++) {
    //         let key = localStorage.key(i);
    //         let value = localStorage.getItem(key);
    //
    //         resultsArray.push(value);
    //     };
    //
    //     console.log('resultsArray', resultsArray)
    //     setResultsToShow(resultsArray)
    // },[localStorage])




  const onClickDeleteAllResults = () => {
    localStorage.clear()
    setResult(null)
    setNumberSavedResults(0)
  }

  

  useEffect(()=>{
    console.log("localStorage", localStorage)
  },[localStorage])

  useEffect(()=>{
    console.log("resultsToShow", resultsToShow)
  },[resultsToShow])


   
       return (
        // <WrappLocalStorageSection>
         <WrappBtn>
            <SaveResultBtn onClick={onClickDeleteAllResults}> Wyzeruj</SaveResultBtn>
            {canISaveTheResult && <SaveResultBtn onClick={onClickSaveYourResults}> Zapisz wynik</SaveResultBtn>}
        </WrappBtn>
       // </WrappLocalStorageSection>
    )
}

export default SaveResult

// const WrappLocalStorageSection = styled.div`
//   margin: 10px 40px 0px 40px ;
//   border: 2px solid darkorange;
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 550px) {
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `



const WrappBtn = styled.div`
   //border: 2px solid crimson;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //align-items: center;
  order: 1;
  @media (min-width: 550px) {
    order: 2;
    align-items: flex-end;
    //justify-content: flex-end;
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




