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
  // const [val_4, setVal_4] = useState(0);
  // const [val_5, setVal_5] = useState(0);
  // const [val_6, setVal_6] = useState(0);
  // const [val_7, setVal_7] = useState(0);
  // const [val_8, setVal_8] = useState(0);
  // const [val_9, setVal_9] = useState(0);

  /* Need to work on total income, this needs to go to parent for
  use in logic to calculate */

  useEffect( () => {
    setTOTAL(val_1 + val_2 - local.DR)},
    [val_1, val_2, local.DR,  setTOTAL]
  );

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
        <div>
          Testing Total a = {val_1} : b = {val_2}
        </div>
        <div>Testing Total2 = {TOTAL} </div>
      </div>
    </React.Fragment>
  );
};

export default Income;
