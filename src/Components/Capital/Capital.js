import React, {Fragment, useState, useEffect} from "react";
import classes from "./Capital.module.css"

const Capital = (props) => {

    /*Tariff income and capital logic to follow */

    const [capital, setCapital] = useState(0);
    const [tariff, setTariff] = useState(0)
    const handleCapital = (e) => {
    if(Number(e.target.value) < 10000) { return setCapital(Number(e.target.value))}
   
    
    }

    return (
        <Fragment>
            <div className={classes.container}>
                <h4>Capital</h4>
                <label className={classes.label}>
                    <input className={classes.input} onChange={handleCapital} type="number"/>
                </label>
            </div>
        </Fragment>
    )
}
export default Capital;