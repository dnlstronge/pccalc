import React from 'react'
import classes from "./Housing.module.css"

export default function Housing() {
  return (
    <div className={classes.container}>
        <label htmlFor='eligibleHousing'>Weekly eligible housing
            <input id="eligibleHousing" type="number"></input>
        </label>
    </div>
  )
}
