import React from 'react'
import { ButtonWithArrow } from '../buttons/Button'

export const SideNav = () => {
  return (
        <div style={{display:"flex", flexDirection:"column", padding:"5px"}}>
          <a href="/create"><div style={btnContainer}><ButtonWithArrow title="Add Term" /></div></a>
          <a href="/addclass"><div style={btnContainer}> <ButtonWithArrow title="Add/See Classes" /></div></a>
          <a href="/addsubject"><div style={btnContainer}> <ButtonWithArrow title="Add Subject" /></div></a>
        </div>
  )
}

const btnContainer = {padding:"7px",}