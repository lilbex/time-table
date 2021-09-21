import React from 'react'
import Navigation from "../../components/navbar/Navbar"
import {SideNav} from "../../components/navbar/SideNav"
import {AddTerm} from "../../components/dynamicform/AddTerm"
export const CreatePage = () => {
  return (
    <div className="jumbotron" style={{backgroundColor:"grey", height:"100vh", }}>
        <Navigation />
        <div style={{display:'flex',}}>
          <div><SideNav /></div>
          <div style={{width:"400px", marginLeft:"100px", marginTop:"50px"}}><AddTerm /></div>
        </div>
          
          
        
        
    </div>
  )
}

const btnContainer = {padding:"7px",}