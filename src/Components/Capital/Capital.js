import React, {Fragment, useState, useEffect} from "react";
import classes from "./Capital.module.css"
import elements from "../ApplicableAmounts/AA"

const { capitaldisregard } = elements

const Capital = ({ updateAction }) => {

    /*Tariff income and capital logic to follow */

    const [capital, setCapital] = useState(0);
    const [tariff, setTariff] = useState(0)
    const handleCapital = (e) => {
        let actualCap = Number(e.target.value)
    if(actualCap <= capitaldisregard) { 
        //console.log("under") 
        return setCapital(0)}
    else if(actualCap > capitaldisregard) { 
        //console.log("over")
        return setCapital(actualCap - capitaldisregard)}
    
    
    }

    /* Logic needs to handle:
        [*] - £2 per 1,000
        [*] - £1 per 500
        [*] - £501 is £2 ] 
        [*] - £4 is £1 */

    useEffect(() => {
        
        let remainder = capital % 500
        let floored = Math.floor(capital / 500) 
     
       if(remainder > 0) {
        setTariff(floored + 1)
       } else {
        setTariff(floored)
       }
    }, [capital])

    useEffect( () => {
        if(tariff > 0) {
           return updateAction( {type: "TARIFF", payload: tariff })
        }
    }, [tariff, updateAction])


    return (
        <Fragment>
            <div className={classes.container}>
                <h4 className={classes.heading}>Capital</h4>
                <label className={classes.label}>Total savings & capital
                    <input className={classes.input} onChange={handleCapital} type="number"/>
                </label>
                <p className={classes.para}>*derived tariff income = £{tariff.toFixed(2)}pw</p>
            </div>
        </Fragment>
    )
}
export default Capital;