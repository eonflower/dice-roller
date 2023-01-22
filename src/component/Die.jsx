import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from "@fortawesome/free-solid-svg-icons";

export default function Die(props) {

    // console.log("props", props.reset)

    function handleClick() {
        // console.log(index)
        props.dieClicked(props.index)
    }
    let newIcon = null

    if (props.dieNumber === 1){
            newIcon = faDiceOne
       } else if (props.dieNumber === 2){
            newIcon = faDiceTwo
       } else if (props.dieNumber === 3){
            newIcon = faDiceThree
       } else if (props.dieNumber === 4){
            newIcon = faDiceFour
       } else if (props.dieNumber === 5){
            newIcon = faDiceFive
       } else if (props.dieNumber === 6){
            newIcon = faDiceSix
       }
    

    return (
            <FontAwesomeIcon 
            className={props.isActive ? "icon-clicked" : "icon-btn"} 
            onClick={handleClick} 
            icon={newIcon} />
    )
}