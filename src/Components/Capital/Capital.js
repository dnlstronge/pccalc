import React, {Fragment, useState, useEffect} from "react";
import classes from "./Capital.module.css"
import elements from "../ApplicableAmounts/AA"

const { capitaldisregard } = elements

const Capital = (props) => {

    /*Tariff income and capital logic to follow */

    const [capital, setCapital] = useState(0);
    const [tariff, setTariff] = useState(0)
    const handleCapital = (e) => {
        let actualCap = Number(e.target.value)
    if(actualCap <= capitaldisregard) { 
        console.log("under") 
        return setCapital(0)}
    if(actualCap > capitaldisregard) { 
        console.log("over")
        return setCapital}
    
    
    }

    return (
        <Fragment>
            <div className={classes.container}>
                <h4>Total capital</h4>
                <label className={classes.label}>
                    <input className={classes.input} onChange={handleCapital} type="number"/>
                </label>
            </div>
        </Fragment>
    )
}
export default Capital;