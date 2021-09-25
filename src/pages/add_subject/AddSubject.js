import React from 'react'
import Navigation from "../../components/navbar/Navbar"
import {SideNav} from "../../components/navbar/SideNav"
import {Terms} from "../../components/terms/Terms"
import AddSubForm from "../../components/add_sub_form/AddSubForm"
import {ClassEntered} from "../../components/entered_class/Class"
import "../../utils/Fonts.css"

export const AddSubject = () => {
  return (
    <div className="font" style={{backgroundColor:"grey", height:"100vh", }}>
        <Navigation />
        <div className="container">
        <div style={{display:'flex',}}>
          <div style={DivStyle}><Terms /></div>
          <div style={DivStyle}><ClassEntered /></div>
          <div ><AddSubForm /></div>  
        </div>
        </div>
        
          
    </div>
  )
}

const ClassStyle={width:"300px", marginLeft:"", marginTop:"10px"}
const DivStyle={width:"400px", marginLeft:"", marginTop:"40px"}
