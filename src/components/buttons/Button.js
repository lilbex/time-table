import React from 'react'
import {FaGreaterThan} from "react-icons/fa"

const ButtonWithArrow = (props) => {
  return (
    <div style={{backgroundColor:"white", width:"250px"}}>
      <button  style={button}> {props.title} </button>
    <FaGreaterThan /> 
    </div>
    
  )
}

const ButtonWithoutArrow = (props) => {
  return (
    <button  style={ButtonWithoutArrowStyle}> {props.title} </button>
  )
}


const button = {width:"200px", backgroundColor:"white", borderColor:"transparent", textAlign:"left"}
const icon = { marginLeft:"30px"}
const ButtonWithoutArrowStyle = {width:"200px", backgroundColor:"white", borderColor:"transparent", textAlign:"left", padding:"5px", margin:"10px"}

export {ButtonWithArrow, ButtonWithoutArrow}