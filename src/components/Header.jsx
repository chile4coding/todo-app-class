import React from "react";
import MoonIcon from "../assets/icons/MoonIcon";
import classes from "./header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <h3 className={classes.light}>TODO</h3>
      <MoonIcon />
    </div>
  );
}
