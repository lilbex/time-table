import React from 'react'
import Navigation from "../../components/navbar/Navbar"
import {SideBar} from "../../components/navbar/SideBar"
import {SideTab} from "../../components/navbar/SideTab"
import {Terms} from "../../components/terms/Terms"
import {AddClassForm} from "../../components/add_class_form/AddClassForm"
import "../../utils/Fonts.css"
import "./style.css"

export const AddClass = () => {
  return (
    <div className="font" style={{backgroundColor:"white", height:"100vh", }}>
        <Navigation />
        <div style={{display:'flex',flexDirection:"space-between"}}>
          <div ><SideBar /></div>
          <div><SideTab /></div>
        </div>    
    </div>
  )
}
