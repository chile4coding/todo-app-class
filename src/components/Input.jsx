import React from "react";
import classes from "./input.module.css";
import Header from "./Header";

export default function Input() {
  return (
    <div className={classes.main_container}>
      <div className={classes.input_container}>
        <Header />

        <div className={classes.add}>
          <button
            className={`${classes.add_icon} ${classes.light_button}`}></button>

          <input className={classes.input} />
        </div>
      </div>
    </div>
  );
}
