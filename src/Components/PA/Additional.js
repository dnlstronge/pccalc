import React, { Fragment }from 'react'
import classes from "./Additional.module.css"

export default function Additional({ updateAction }) {

   

    const handleSDP = (e) => {
        updateAction({
            type: e.target.value
        })
    }
    const handleCarer = (e) => {
        updateAction({
            type: e.target.value
        })
    }
    const handleTransitional = (e) => {

    }
  return (
    <div className={classes.container}>
        <h5>Additional Amounts</h5>
        <label className={classes.label} htmlFor='sdp'>Severe Disabilty
            <select onChange={handleSDP} className={classes.select} id="sdp">
                <option value="SDPNULL">--select</option>
                <option value="SDPONE">One</option>
                <option value="SDPBOTH">Both</option>
                <option calue="SDPNULL">None</option>
            </select>
        </label>
        <label className={classes.label} htmlFor='care'>Carer
            <select onChange={handleCarer} className={classes.select} id="care">
                <option value="CARENULL">--select</option>
                <option value="CAREONE">One</option>
                <option value="CAREBOTH">Both</option>
                <option value="CARENULL">None</option>
            </select>
        </label>
        <label onChange={handleTransitional} className={classes.label} htmlFor='trans'>Transitional Amount (pw)
            <input className={classes.input} type="number" id="trans" />
        </label>
    </div>
  )
}
