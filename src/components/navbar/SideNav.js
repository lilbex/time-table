import React from 'react'
import { ButtonWithArrow } from '../buttons/Button'

export const SideNav = () => {
  return (
        <div style={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
          <div style={btnContainer}><ButtonWithArrow title="Add Term" /></div>
          <div style={btnContainer}> <ButtonWithArrow title="Add/See Classes" /></div>
          <div style={btnContainer}> <ButtonWithArrow title="Add Subject" /></div>
          <div style={btnContainer}><ButtonWithArrow title="Add Teacher" /></div>
        </div>
  )
}

const btnContainer = {padding:"7px",}