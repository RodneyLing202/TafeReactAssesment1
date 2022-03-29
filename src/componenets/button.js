import React from "react";
// import classNames from './button.module.css';

export function Button(props) {
  const { title, onClick } = props; // object destructuring
  return <button onClick={onClick}>{title}</button>;
}
