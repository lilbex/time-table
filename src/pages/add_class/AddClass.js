import React from 'react'
import Navigation from "../../components/navbar/Navbar"
import {SideNav} from "../../components/navbar/SideNav"
import {Terms} from "../../components/terms/Terms"
import {AddClassForm} from "../../components/add_class_form/AddClassForm"

export const AddClass = () => {
  return (
    <div className="jumbotron" style={{backgroundColor:"grey", height:"100vh", }}>
        <Navigation />
        <div style={{display:'flex',}}>
          <div style={DivStyle}><SideNav /></div>
          <div style={DivStyle}><Terms /></div>
          <div style={Class}><AddClassForm /></div>
        </div>    
    </div>
  )
}

const Class={width:"300px", marginLeft:"50px", marginTop:"10px"}
const DivStyle={width:"300px", marginLeft:"50px", marginTop:"40px"}