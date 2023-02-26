import React from 'react';
import classes from "./Children.module.css";

export default function Children() {
  return (
    <div className={classes.container}>
        <label className={classes.label} htmlFor='children'>
            <input className={classes.checkbox} id="children" type="checkbox"></input>
        </label>
    </div>
  )
}
