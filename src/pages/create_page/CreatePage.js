import React from 'react'
import Navigation from "../../components/navbar/Navbar"
import {SideNav} from "../../components/navbar/SideNav"
import {SideBar} from "../../components/navbar/SideBar"
import {AddTerm} from "../../components/add_term_form/AddTerm"
import "../../utils/Fonts.css"

export const CreatePage = () => {
  return (
    <div className="font" style={{backgroundColor:"#FFFFFFFF", height:"100vh", }}>
        <Navigation />
        <div style={{display:'flex',}}>
          <div><SideBar /></div>
          <div>
            <ul>
              <li><a href="#">2019/2020 2nd term</a></li>
              <li><a href="#">2021/2022 1st term</a></li>
              <li><a href="#">2019/2020 3rd term</a></li>
              <li><a href="#">2021/2022 6th term</a></li>
            </ul>
          </div>
          <div style={{width:"400px", marginLeft:"100px", marginTop:"50px"}}><AddTerm /></div>
        </div>
          
          
        
        
    </div>
  )
}

const btnContainer = {padding:"7px",}