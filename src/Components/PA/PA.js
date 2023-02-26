import React, { Fragment } from "react";
import classes from "./PA.module.css"



export default function PA() {
  return (
    <Fragment>
        <div className={classes.container}>
        <h5>Personal</h5>
        <label htmlFor="marital">Relationship Status
        <select id="marital">
            <option>--select--</option>
            <option>Single</option>
            <option>Couple</option>
        </select>
        </label>
        <label htmlFor="claim">Claim Type
        <select id="claim">
            <option>--select--</option>
            <option>GPC</option>
            <option>GPC + Savings credit</option>
        </select>
        </label>
      </div>
</Fragment>
  )
}
