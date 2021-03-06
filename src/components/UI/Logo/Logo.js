import React from "react";
import logo from "../../../assets/logo.png";
import classes from "./Logo.module.css";

export default () => (
  <div className={classes.Logo}>
    <img src={logo} alt="Tutti Builder logo" />
    <span>Tutti-Frutti</span>
  </div>
);
