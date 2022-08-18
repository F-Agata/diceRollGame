import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

import d6 from './d6.svg'
import d10 from './d10.svg'
import d20 from './d20.svg'
import d100 from './d100.svg'

const YourChoice = ({
  k6Choice,
  k10Choice,
  k20Choice,
  k100Choice,
  setResult,
  setCanISaveTheResult,
}) => {
  const options = [
    { value: 1, label: '1', selected: false },
    { value: 2, label: '2', selected: false },
    { value: 3, label: '3', selected: false },
    { value: 4, label: '4', selected: false },
    { value: 5, label: '5', selected: false },
  ]

  const [howManyMeshes, setHowManyMeshes] = useState(null)
  const [showBtn, setShowBtn] = useState(false)
  const [howManyDices, setHowManyDices] = useState(1)

  useEffect(() => {
    if (
      k6Choice === true ||
      k10Choice === true ||
      k20Choice === true ||
      k100Choice === true
    ) {
      setShowBtn(true)
    } else setShowBtn(false)
  }, [k6Choice, k10Choice, k20Choice, k100Choice])

  useEffect(() => {
    if (k6Choice === true) {
      setHowManyMeshes(6)
    } else if (k10Choice === true) {
      setHowManyMeshes(10)
    } else if (k20Choice === true) {
      setHowManyMeshes(20)
    } else if (k100Choice === true) {
      setHowManyMeshes(100)
    }
  }, [k6Choice, k10Choice, k20Choice, k100Choice])

  const onChangeManyDices = (e) => {
    setResult(null)
    setHowManyDices(e.value)
  }

  const onClickGiveResult = () => {
    setResult(null)
    const resultsArray = []

    for (let i = 0; i < howManyDices; i++) {
      const randomNumber = Math.floor(Math.random() * howManyMeshes + 1)
      resultsArray.push(randomNumber)
    }

    const resultsStrings = resultsArray.join(', ')
    setResult(resultsStrings)
    setCanISaveTheResult(true)
  }

  return (
    <WrappDiceAndBtn>
      <WrappDice>
        {k6Choice && <Dice src={d6} alt="d6picture" />}
        {k10Choice && <Dice src={d10} alt="d10picture" />}
        {k20Choice && <Dice src={d20} alt="d20picture" />}
        {k100Choice && <Dice src={d100} alt="d100picture" />}
      </WrappDice>
      <WrappBtn>
        {showBtn && (
          <WrappBtnHowManyDices>
            <BtnHowManyDices
              options={options}
              placeholder="Liczba kości"
              onChange={(e) => onChangeManyDices(e)}
            >
              {' '}
            </BtnHowManyDices>
          </WrappBtnHowManyDices>
        )}
        {showBtn && (
          <BtnMoreDices onClick={onClickGiveResult}>Rzuć</BtnMoreDices>
        )}
      </WrappBtn>
    </WrappDiceAndBtn>
  )
}

export default YourChoice

const WrappDiceAndBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }
`

const WrappDice = styled.div`
  width: 300px;
  height: 300px;
  @media (min-width: 550px) {
    position: relative;
    height: 200px;
  }
`

const Dice = styled.img`
  width: 300px;
  height: 300px;
  @media (min-width: 550px) {
    position: absolute;
    left: -30px;
  }
`

const WrappBtn = styled.div`
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 550px) {
    align-items: flex-end;
  }
`

const BtnMoreDices = styled.button`
  width: 177px;
  margin: 10px 40px 0px 40px;
  background-color: transparent;
  border: 2px solid #899903;
  line-height: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.2, 1.2);
  }
  @media (min-width: 550px) {
    margin: 10px;
  }
`

const WrappBtnHowManyDices = styled.div`
  width: 177px;
  margin: 0px 40px 0 40px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 550px) {
    margin: 10px;
  }
`

const BtnHowManyDices = styled(Select)`
  width: 177px;
  text-align: right;
  background-color: transparent;
  border: 2px solid #899903;
  padding: 3px 3px;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  :focus {
    background-color: #899903;
  }
  ::placeholder {
    padding: 3px 3px;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    background-color: transparent;
    color: black;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: 0.3s;
  }
`
