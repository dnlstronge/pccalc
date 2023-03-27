import React, { useState, useEffect } from "react";
import classes from "./Income.module.css";
import IncomeSelect from "./IncomeSelect.js";

const Income = ({ updateAction }) => {
  const [local, setLocal] = useState({
    DR: 0,
  });
  const [TOTAL, setTOTAL] = useState(0);

  /* from each individual component */

  const [val_1, setVal_1] = useState(0);
  const [val_2, setVal_2] = useState(0);
  const [val_3, setVal_3] = useState(0);
  const [val_4, setVal_4] = useState(0);
  const [val_5, setVal_5] = useState(0);
  const [val_6, setVal_6] = useState(0);
  const [val_7, setVal_7] = useState(0);
  const [val_8, setVal_8] = useState(0);
  const [val_9, setVal_9] = useState(0);

 


  /* handles total sum locally */
  useEffect(() => {
    let a = val_1
    let b = val_2
    let c = val_3
    let d = val_4
    let e = val_5
    let f = val_6
    let g = val_7
    let h = val_8
    let i = val_9
    let DR = local.DR
    let SUM = a + b + c +d +e +f +g +h +i - DR
     setTOTAL(SUM)},
    [val_1, val_2, val_3, val_4, val_5, val_6, val_7, val_8, val_9, local.DR,  setTOTAL]
  );

  /* lifts sum total up to parent state */
  useEffect(() => {
    if(TOTAL > 0) {
     return updateAction({
        type: "INCOME", payload: TOTAL
      })
    }
  }, [TOTAL, updateAction])

  const disregardHandler = (e) => {
    setLocal({ ...local, DR: Number(e.target.value) });
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <h4 className={classes.heading}>Income</h4>
        <label htmlFor="EDselect" className={classes.label}>
          Earnings Disregard
          <select
            onChange={disregardHandler}
            id="EDselect"
            className={classes.select}
          >
            <option value="0">--Select--</option>
            <option value="0">None</option>
            <option value="5">Single</option>
            <option value="10">Couple</option>
            <option value="20">Disability</option>
          </select>
        </label>
        <IncomeSelect updateState={setVal_1} />
        <IncomeSelect updateState={setVal_2} />
        <IncomeSelect updateState={setVal_3} />
        <IncomeSelect updateState={setVal_4} />
        <IncomeSelect updateState={setVal_5} />
        <IncomeSelect updateState={setVal_6} />
        <IncomeSelect updateState={setVal_7} />
        <IncomeSelect updateState={setVal_8} />
        <IncomeSelect updateState={setVal_9} />
      </div>
    </React.Fragment>
  );
};

export default Income;
