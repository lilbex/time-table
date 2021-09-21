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

const ButtonWithoutArrow = () => {
  return (
    <button  style={iconWithoutArrow}> Add Term </button>
  )
}


const button = {width:"200px", backgroundColor:"white", borderColor:"transparent", textAlign:"left"}
const icon = {paddingLeft:"15px", marginLeft:"60px"}
const iconWithoutArrow = {alignSelf:"center"}

export {ButtonWithArrow, ButtonWithoutArrow}