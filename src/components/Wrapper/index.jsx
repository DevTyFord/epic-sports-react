import React from 'react';
import ReactDOM from 'react';
import classes from "./index.module.css";

export default function Wrapper(props) {
  return <div className={classes.Container}>{props.children}</div>;
}