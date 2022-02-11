import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import d6 from './d6.svg'
import d10 from './d10.svg'
import d20 from './d20.svg'
import d100 from './d100.svg'



const YourChoice = ({ k6Choice, k10Choice, k20Choice, k100Choice, setResult}) => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        if (k6Choice === true || k10Choice === true || k20Choice === true || k100Choice === true) {
            setShowBtn(true)
        } else setShowBtn(false)
    }, [k6Choice, k10Choice, k20Choice, k100Choice])



    return (
        <WrappDiceAndBtn>
            <WrappDice>
                {k6Choice && <Dice src={d6} alt="d6picture"/>}
                {k10Choice && <Dice src={d10} alt="d10picture"/>}
                {k20Choice && <Dice src={d20} alt="d20picture"/>}
                {k100Choice && <Dice src={d100} alt="d100picture"/>}
            </WrappDice>
            {showBtn && <Btn>Rzuć kością</Btn>}
        </WrappDiceAndBtn>
    )
}

export default YourChoice

const WrappDiceAndBtn = styled.div`
  //border: 2px solid crimson;  
  width: 60%;
display: flex;
  justify-content: space-between;
`

const WrappDice = styled.div`
  //border: 2px solid chartreuse;
    width: 200px;
  position: relative;
  `

const Dice = styled.img`
width: 300px;
height: 300px;
  position: absolute;
`
const Btn = styled.button`
  margin: 40px ;
  background-color: transparent;
  border: 2px solid #899903;
  width: 200px;
  height: 50px;
  padding: 10px;
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

