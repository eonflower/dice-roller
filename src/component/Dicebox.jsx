import {useState} from "react";
import Die from "./Die"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Dicebox() {

    const initialState = [{number: 1, isActive: false}, {number: 1, isActive: false}, {number: 1, isActive: false}, {number: 1, isActive: false}, {number: 1, isActive: false}]
    
    const [numbers, setNumbers] = useState(initialState)
    const [reset, setReset] = useState(true)

    function changeNumber() {
        let newNum = numbers.map(number => {
          if (number.isActive === false) {
            return {number: Math.floor(Math.random() * 6) + 1, isActive: number.isActive}
          } else if (number.isActive === true) {
            return {number: number.number, isActive: number.isActive}
          }
        })

        setNumbers(newNum)
        // console.log(icon)
    }

    function resetDice() {
        // console.log(reset)
        setNumbers(initialState)
    }

    function activeDie(index) {
        setNumbers(prevNumber => {
            return prevNumber.map((die, i) => {
                return {number: die.number, isActive: index === i ? !die.isActive : die.isActive}
            })
        })
    }

    const dice = numbers.map((number, index) => {
        return <Die
                key={index}
                classNum={index + 1}
                index={index}
                dieNumber={number.number}
                handleClick={changeNumber}
                reset={reset}
                isActive={number.isActive}
                dieClicked={activeDie}
            />
    } )

    
    
    return (
        <div className="container">
            <h3 className="click-title">click on die to save roll</h3>
            <div className="dicebox">
            {dice}
            </div>
        <button className="roll" onClick={changeNumber}>roll the dice</button>
        <button className="reset" onClick={resetDice}>reset</button>
        
        </div>
    )
}