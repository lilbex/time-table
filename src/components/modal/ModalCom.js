import React, { useEffect } from "react";
import Modal from "react-modal";
import "./style.css";
import NavBar from "../navbar/Navbar"
import {AiFillCloseCircle} from "react-icons/ai";

export const ModalCom = (props) => {
  return (
    <div
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
    >
      <AiFillCloseCircle className="close-icon" onClick={props.onRequestClose} />
      <div className="modal-nav">
        <div>
            <form className="form-inline" className="modal-form">
             <input className="modal-form-input" placeholder="Email" />
             <input className="modal-form-input" placeholder="Password" />
              <button className="btn btn-primary btn-btn">Login</button>
          </form>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6">This is the right hand side</div>
          <div className="col-md-6">
            <div style={{width:"90%"}}>
              <form>
                <h3>Create an Account</h3>
                <p>It's Free and will always be</p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control modal-form-input"
                    aria-describedby="emailHelp"
                    placeholder="Enter Fullname"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control modal-form-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control modal-form-input"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control modal-form-input"
                    placeholder="Re-enter Password"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary modal-form-input" style={{width:"50%"}}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button onClick={props.closeModal}>Close</button>
    </div>
  );
};
