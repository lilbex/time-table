import React from 'react'
import Navigation from "../../components/navbar/Navbar"
import {SideNav} from "../../components/navbar/SideNav"
import AddTeacherForm from '../../components/add_teacher_form/AddTeacherForm'

export const AddTeacher = () => {
  return (
    <div className="jumbotron" style={{backgroundColor:"grey", height:"100vh", }}>
        <Navigation />
        <div className="container">
        <div style={{display:'flex',}}>
          <SideNav />  
          <AddTeacherForm />
        </div>
        </div>
        
          
    </div>
  )
}

const ClassStyle={width:"300px", marginLeft:"", marginTop:"10px"}
const DivStyle={width:"400px", marginLeft:"", marginTop:"40px"}
