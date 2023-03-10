import React from 'react'
import classes from "./Housing.module.css"

export default function Housing({ updateAction }) {

  const handleHousing = (e) => {
    if(e.target.value > 0) {
    updateAction({type: "HOUSING", housing: Number(e.target.value)})
    }
  }
  return (
    <div className={classes.container}>
        <label className={classes.label} htmlFor='eligibleHousing'>Weekly eligible housing
            <input onChange={handleHousing} className={classes.input} id="eligibleHousing" type="number"></input>
        </label>
    </div>
  )
}
