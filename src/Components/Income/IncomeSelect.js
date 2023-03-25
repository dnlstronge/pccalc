import React, { useState, useEffect } from "react";
import { markAsUntransferable } from "worker_threads";
import classes from "./IncomeSelect.module.css";

const IncomeSelect = ({ updateState }) => {
  const [incomeLocal, setIncomeLocal] = useState({
    value: 0,
    freq: "",
    
  });
  const [actual, setActual] = useState(0)

  const handleAmount = (e) => {
    setIncomeLocal({ ...incomeLocal, value: Number(e.target.value) });
  };

  const handleFreq = (e) => {
    setIncomeLocal({ ...incomeLocal, freq: e.target.value });
  };


  /* the following code is causing problems */
  useEffect(() => {
    let a = incomeLocal.value;
    let b = incomeLocal.freq;
    if (b === "W") {
      return setActual(a)
    }
    if (b === "M") {
     return setActual((a * 12) / 12)
    }
    if (b === "Q") {
     return setActual((a * 4) / 52 )
    }
    if (b === "Y") {
     return setActual(a / 52)
    } else {
        return;
    }
  
  }, [
    incomeLocal.value,
    incomeLocal.freq,
    incomeLocal.actual,
    setIncomeLocal,
    incomeLocal,
  ]);

  // lift to state:

  useEffect(() => {
    
    let val = incomeLocal.actual.toFixed(2)
    if (val > 0) {
       return updateState({value: Number(val)})
    } else {
    return }

  }, [incomeLocal.actual, updateState ]);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <label className={classes.label} htmlFor="selectselect">
         
          <select className={classes.select} id="selectselect">
            <option value="--select--">--Select Income--</option>
            <option value="State Pension">State Pension</option>
            <option value="State Pension (partner)">
              State Pension (partner)
            </option>
            <option value="Occupational Pension">Occupational Pension</option>
            <option value="Occupational Pension (partner)">
              Occupational pension (partner)
            </option>
            <option value="Private Pension">Private Pension</option>
            <option value="Private Pension (partner)">
              Private Pension (partner)
            </option>
            <option value="Wages">Wages</option>
            <option value="Wages (partner)">Wages (partner)</option>
            <option value="Other">Other</option>
          </select>
          <input
            onChange={handleAmount}
            className={classes.input}
            type="number"
          ></input>
          <select className={classes.selectFreq} onChange={handleFreq}>
            <option value="N">--frequency--</option>
            <option value="W">Weekly</option>
            <option value="M">Monthly</option>
            <option value="Q">Quarterly</option>
            <option value="Y">Yearly</option>
          </select>
        </label>
        
      </div>
    </React.Fragment>
  );
};
export default IncomeSelect;
