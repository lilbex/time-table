import React, { useEffect } from "react";
import "./style.css";
import {LoginNav} from "../../components/navbar/LoginNav"

export const Authentication = (props) => {
  return (
    <>
    <LoginNav />
    <div className="mycontainer">
      <div style={{ backgroundColor: "#000000FF", height: "100vh" }}>
        <h3 style={{ color: "white", textAlign: "center" }}>
          Create a Time-table
        </h3>
        <h4 style={{ color: "white", textAlign: "center" }}>Stress free</h4>
        <h3 style={{ color: "white", textAlign: "center" }}>
          As many time as you want
        </h3>
        <hr style={{color:"white"}}/>
        <p style={{ color: "white", textAlign: "center" }}>
          You can Edit your entries and generate new time-table again
        </p>
        <hr style={{color:"white"}}/>
        <p style={{ color: "white", textAlign: "center" }}>
          Each generation is always better than the previous
        </p>
        <hr style={{color:"white"}}/>
        <p style={{ color: "white", textAlign: "center" }}>
          We also give you suggestions to improve your time-table
          and make it more efficient. 
        </p>
        <hr style={{color:"white"}}/>
        <p style={{ color: "white", textAlign: "center", fontSize:"50px" }}>&#128519;&#128525;</p>
      </div>
      <div>
        <div className="shadow">
          <form style={{ margin: "50px" }}>
            <div style={{ paddingTop: "30px" }}>
              <h3 style={{ color: "black", textAlign: "center" }}>
                Create an Account
              </h3>
              <p style={{ color: "black", textAlign: "center" }}>
                It's Free and will always be
              </p>
            </div>

            <div className="floating-label-group">
              <input
                type="text"
                className="input"
                autocomplete="off"
                autofocus
                required
              />
              <label class="floating-label">Fullname</label>
            </div>
            <div className="floating-label-group">
              <input
                type="email"
                className="input"
                autocomplete="off"
                autofocus
                required
              />
              <label class="floating-label">Email</label>
            </div>
            <div className="floating-label-group">
              <input
                type="password"
                className="input"
                autocomplete="off"
                autofocus
                required
              />
              <label class="floating-label">Password</label>
            </div>
            <div className="floating-label-group">
              <input
                type="password"
                className="input"
                autocomplete="off"
                autofocus
                required
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
    </>
  );
};
