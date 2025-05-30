import React from "react";
import CheckIcon from "../assets/icons/CheckIcon";
import classes from "./todo.module.css";
import CloseIcon from "../assets/icons/CloseIcon";

export default function Todo() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {/* <button className={`${classes.add_icon} ${classes.light_button}`}>
          <CheckIcon />
        </button> */}

        <button
          className={`${classes.unchecked} ${classes.light_button}`}></button>

        <p>task one is here</p>
      </div>

      <CloseIcon />
    </div>
  );
}
