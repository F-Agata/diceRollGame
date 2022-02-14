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

const onClickGiveResult = () => {
        let howManyMeshes = null
    if (k6Choice === true) {howManyMeshes = 6
    }  else if (k10Choice === true) {howManyMeshes = 10
    }  else if (k20Choice === true) {howManyMeshes = 20
    }  else if (k100Choice === true) {howManyMeshes = 100}

    // console.log("howManyMeshes", howManyMeshes)
    console.log(Math.floor(Math.random()*100+1))

}

    return (
        <WrappDiceAndBtn>
            <WrappDice>
                {k6Choice && <Dice src={d6} alt="d6picture"/>}
                {k10Choice && <Dice src={d10} alt="d10picture"/>}
                {k20Choice && <Dice src={d20} alt="d20picture"/>}
                {k100Choice && <Dice src={d100} alt="d100picture"/>}
            </WrappDice>
            {showBtn && <Btn onClick={onClickGiveResult}>Rzuć kością</Btn>}
        </WrappDiceAndBtn>
    )
}

export default YourChoice

const WrappDiceAndBtn = styled.div`
  //border: 2px solid crimson;  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 530px) {
       flex-direction: row;
    justify-content: flex-start;
    }
`

const WrappDice = styled.div`
  //background-color:  chartreuse;
    width: 300px;
  height: 300px;
  @media (min-width: 530px) {
    position: relative;
    height: 200px;
  }
     `

const Dice = styled.img`
  //border: 2px solid crimson;
  width: 300px;
height: 300px;
  @media (min-width: 530px) {
    position: absolute;
    left: 0;
      }
  
`
const Btn = styled.button`
  margin: 10px ;
  background-color: transparent;
  border: 2px solid #899903;
  line-height: 20px;
  padding: 10px 20px;
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
  @media (min-width: 530px) {
    align-self: flex-start;
  }
`

