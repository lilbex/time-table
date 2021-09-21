import React from 'react'
import { ButtonWithArrow } from '../buttons/Button'

export const ClassEntered = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", marginLeft:""}}>
      <div style={btnContainer}><ButtonWithArrow title= "JSS 1" /></div>
      <div style={btnContainer}> <ButtonWithArrow title="JSS 2" /></div>
      <div style={btnContainer}> <ButtonWithArrow title="JSS 3" /></div>
      <div style={btnContainer}><ButtonWithArrow title="SS 1" /></div>
    </div>
  )
}
const btnContainer = {padding:"7px",}