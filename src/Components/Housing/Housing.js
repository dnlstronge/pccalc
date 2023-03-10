import React from 'react'
import classes from "./Housing.module.css"

export default function Housing() {

  const handleHousing = (e) => {
    
  }
  return (
    <div className={classes.container}>
        <label className={classes.label} htmlFor='eligibleHousing'>Weekly eligible housing
            <input className={classes.input} id="eligibleHousing" type="number"></input>
        </label>
    </div>
  )
}
