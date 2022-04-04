import React from "react";
// import classNames from './button.module.css';
import {default as BootstrapButton} from "react-bootstrap/Button";
export function Button(props) {
  let buttonType = ""
  
  if (props.buttonType == null) 
    buttonType = "primary"
  
  else
    buttonType = props.buttonType

  const { title, onClick } = props; // object destructuring
  return(
    <BootstrapButton variant={buttonType} onClick={onClick}>{title}</BootstrapButton>
  )
}
