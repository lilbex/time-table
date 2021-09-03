import React, { Component } from 'react';
import { ButtonWrapper } from './style';
import { FaGreaterThan } from 'react-icons/fa';


export default function SingleButton(props) {
    return (
        <ButtonWrapper whenClick={props.handleOnClick}>
        {props.text} <FaGreaterThan />
      </ButtonWrapper>
    );
}