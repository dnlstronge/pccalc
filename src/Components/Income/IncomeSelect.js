import React, {useState, useEffect } from "react";
import classes from "./IncomeSelect.module.css"

const IncomeSelect = ({id, localState, updateState}) => {
    const [incomeLocal, setIncomeLocal] = useState({
        value: 0,
        freq: "",
        actual: 0
    })

    const handleAmount = (e) => {
        setIncomeLocal({...incomeLocal, value: Number(e.target.value)})
    }

    const handleFreq = (e) => {
        setIncomeLocal({...incomeLocal, freq: e.target.value})
    }

    useEffect(() => {
        let a = incomeLocal.value
        let b = incomeLocal.freq
        if(b === "W") {
            setIncomeLocal({...incomeLocal, actual: a})
        }
        if(b === "M") {
            setIncomeLocal({...incomeLocal, actual: (a * 12) / 52})
        }
        if(b === "Q") {
            setIncomeLocal({...incomeLocal, actual: (a * 4) / 52})
        }
        if(b === "Y") {
            setIncomeLocal({...incomeLocal, actual: a / 52})
        }

        
    }, [incomeLocal.value, incomeLocal.freq, incomeLocal.actual, setIncomeLocal, incomeLocal])



    return (
        <React.Fragment>
            <div className={classes.container}>
            <label className={classes.label} htmlFor="selectselect"> Enter Income
                <select className={classes.select} id="selectselect">
                    <option value="--select--"></option>
                    <option value="State Pension"></option>
                    <option value="State Pension (partner)"></option>
                    <option value="Occupational Pension"></option>
                    <option value="Occupational Pension (partner)"></option>
                    <option value="Private Pension"></option>
                    <option value="Private Pension (partner)"></option>
                    <option value="Wages"></option>
                    <option value="Wages (partner)"></option>
                    <option value="Other"></option>
                </select>
                <input  onChange={handleAmount} className={classes.input} type="number"></input>
                <select onChange={handleFreq}>
                    <option value="N">--select</option>
                    <option value="W">Weekly</option>
                    <option value="M">Monthly</option>
                    <option value="Q">Quarterly</option>
                    <option value="Y">Yearly</option>
                   
                </select>
                </label>
            </div>
        </React.Fragment>
    )
}
export default IncomeSelect;