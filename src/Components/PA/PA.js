import React, { Fragment, useState } from "react";
import classes from "./PA.module.css"



export default function PA({ updateAction }) {

  const handleCouple = (e) => {
    if(e.target.value === "SINGLE") {
      updateAction({type: "SINGLE"})
    }
    if(e.target.value === "COUPLE") {
      updateAction({type: "COUPLE"})
    }
  }

  const handleType = (e) => {
    if(e.target.value === "SINGLE") {
      updateAction({type: "GPC"})
    }
    if(e.target.value === "COUPLE") {
      updateAction({type: "GPCSC"})
    }
  }
  return (
    
    

    <Fragment>
        <div className={classes.container}>
        <h5>Personal</h5>
        <label htmlFor="marital">Relationship Status
        <select onChange={handleCouple} id="marital">
            <option value="select">--select--</option>
            <option value="SINGLE">Single</option>
            <option value="COUPLE">Couple</option>
        </select>
        </label>
        <label htmlFor="claim">Claim Type
        <select onChange={handleType} id="claim">
            <option value="NONE">--select--</option>
            <option value="GPC">GPC</option>
            <option value="GPCSC">GPC + Savings credit</option>
        </select>
        </label>
      </div>
</Fragment>
  )
}
