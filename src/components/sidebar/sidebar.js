import React from "react";
import { slide as Menu } from "react-burger-menu";
import { ButtonWrapper } from "./style";
import { FaGreaterThan } from "react-icons/fa";
import SingleButton from "./singleButton";

export default function Sidebar(props) {
  return (
    <div>
      <SingleButton text="Add Class" onClick={props.handleClick} />
      <SingleButton text="Add/See Classes" onClick={props.handleClick} />
      <SingleButton text="Add Subjects To a Class" onClick={props.handleClick} />
      <SingleButton text="Add Teacher" onClick={props.handleClick} />Í
    </div>
  );
}
