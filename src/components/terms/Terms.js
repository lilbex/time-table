import React from 'react'
import { ButtonWithArrow } from '../buttons/Button'

export const Terms = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", marginLeft:"10px"}}>
      <div style={btnContainer}><ButtonWithArrow title= "2019/2020-Term 1" /></div>
      <div style={btnContainer}> <ButtonWithArrow title="2019/2020-Term 2" /></div>
      <div style={btnContainer}> <ButtonWithArrow title="2019/2020-Term 3" /></div>
      <div style={btnContainer}><ButtonWithArrow title="2020/2021-Term 1" /></div>
    </div>
  )
}
const btnContainer = {padding:"7px",}