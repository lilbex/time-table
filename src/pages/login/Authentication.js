import React, { useEffect } from "react";
import "./style.css";
import {LoginNav} from "../../components/navbar/LoginNav"

export const Authentication = (props) => {
  return (
        <div className="mycontainer">
          <div style={{backgroundColor:"#000000FF", height:"100vh"}}>
            <h3 style={{color:"white", textAlign:"center"}}>Create a Time-table</h3>
            <h4 style={{color:"white", textAlign:"center"}}>Stress free</h4>
            <p style={{color:"white", textAlign:"center"}}>As many time as you want</p>
          </div>
          <div >
            <div className="shadow">
            <form style={{margin:"50px",}}>
              <div style={{paddingTop:"30px"}}>
                <h3 style={{color:"black", textAlign:"center"}}>Create an Account</h3>
                <p style={{color:"black", textAlign:"center"}}>It's Free and will always be</p>
              </div>

                <div className="floating-label-group">
                  <input
                    type="text"
                    className="input"
                    autocomplete="off"
                    autofocus required
                  />
                  <label class="floating-label">Fullname</label>
                </div>
                <div className="floating-label-group">
                  <input
                    type="email"
                    className="input"
                    autocomplete="off"
                    autofocus required
                  />
                  <label class="floating-label">Email</label>
                </div>
                <div className="floating-label-group">
                  <input
                    type="password"
                    className="input"
                    autocomplete="off"
                    autofocus required
                  />
                  <label class="floating-label">Password</label>
                </div>
                <div className="floating-label-group">
                  <input
                    type="password"
                    className="input"
                    autocomplete="off"
                    autofocus required
                  />
                  <label class="floating-label">Password Again</label>
                </div>
                <div className="form-group">
                  <button className=" button">Login</button>
                </div>
              </form>
            </div>
              
          </div>
        </div>
  );
};

// const Container ={ display:"grid", 
// gridTemplateColumns:"1fr 2fr", 
// gridGap:"0px", 
// height:"auto",
// }
// const Input={
//   borderRadius:"15px",
//   borderColor:"transparent",
//   marginBottom:"10px",
// }
// const Btn={
//   width:"100%", 
//   marginTop:"10px",
//   borderRadius:"15px",
//   borderColor:"transparent",
// }