import React from 'react';
import { HeaderDiv } from './Styles';


export default function AddTermForm(props) {
  return (
    <div className="add-term-form">
        <HeaderDiv>Add Term </HeaderDiv>
        <br/>
      <div className="add-term-form__input-wrapper">
        <input type="text" className="add-term-form__input" placeholder="Add a term" />
        <button className="add-term-form__submit" onClick={props.handleSubmit}>Add</button>
      </div>
    </div>
  );
}