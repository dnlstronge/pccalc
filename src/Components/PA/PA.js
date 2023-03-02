import React, { Fragment, useState } from "react";
import classes from "./PA.module.css"



export default function PA({ updateAction }) {

  const handleCouple = (e) => {
    if(e.target.value === "SELECT") {
      updateAction({type: "SELECT"})
    }
    if(e.target.value === "SINGLE") {
      updateAction({type: "SINGLE"})
    }
    if(e.target.value === "COUPLE") {
      updateAction({type: "COUPLE"})
    }
  }

  const handleType = (e) => {
    if(e.target.value === "NONE") {
      updateAction({type: "NONE"})
    }
    if(e.target.value === "GPC") {
      updateAction({type: "GPC"})
    }
    if(e.target.value === "GPCSC") {
      updateAction({type: "GPCSC"})
    }
  }
  return (
    
    

    <Fragment>
        <div className={classes.container}>
        <h5 className={classes.heading}>Personal</h5>
        <label className={classes.label} htmlFor="marital">Relationship Status
        <select className={classes.select} onChange={handleCouple} id="marital">
            <option value="SELECT">--select--</option>
            <option value="SINGLE">Single</option>
            <option value="COUPLE">Couple</option>
        </select>
        </label>
        <label className={classes.label} htmlFor="claim">Claim Type
        <select className={classes.select} onChange={handleType} id="claim">
            <option value="NONE">--select--</option>
            <option value="GPC">GPC</option>
            <option value="GPCSC">GPC + Savings credit</option>
        </select>
        </label>
      </div>
</Fragment>
  )
}
