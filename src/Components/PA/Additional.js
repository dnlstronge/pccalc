import React, { Fragment }from 'react'
import classes from "./Additional.module.css"

export default function Additional({ updateAction }) {

    const handleSDP = (e) => {

    }
    const handleCarer = (e) => {

    }
    const handleTransitional = (e) => {
        
    }
  return (
    <div className={classes.container}>
        <h5>Additional Amounts</h5>
        <label className={classes.label} htmlFor='sdp'>Severe Disabilty
            <select className={classes.select} id="sdp">
                <option>--select</option>
                <option>One</option>
                <option>Both</option>
                <option>None</option>
            </select>
        </label>
        <label className={classes.label} htmlFor='care'>Carer
            <select className={classes.select} id="care">
                <option>--select</option>
                <option>One</option>
                <option>Both</option>
                <option>None</option>
            </select>
        </label>
        <label className={classes.label} htmlFor='trans'>Transitional Amount (pw)
            <input className={classes.input} type="number" id="trans" />
        </label>
    </div>
  )
}
