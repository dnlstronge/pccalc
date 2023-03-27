import React, { Fragment, useReducer, useEffect } from "react";
import Housing from "../Housing/Housing";
import Additional from "../PA/Additional";
import Children from "../Children/Children";
import PA from "../PA/PA";
import classes from "./Main.module.css";
import elements from "../ApplicableAmounts/AA";
import Capital from "../Capital/Capital";
import Award from "../Award/Award";
import Income from "../Income/Income";

const version = 1.001;

const PC_REDUCER = (state, action) => {
  switch (action.type) {
    /* state for total income + tariff */
    case "INCOME": {
      return { ...state, income: action.payload };
    }
    case "TARIFF": {
      return { ...state, TARIFF: action.payload };
    }
    /* state for  total for applicable amount */
    case "TOTAL": {
      return { ...state, TOTAL: action.payload };
    }
    /* Child disabilities */

    case "DISLOW": {
      return { ...state, dislow: elements.disabledChild * action.payload };
    }
    case "DISHIGH": {
      return { ...state, dishigh: elements.disabledChildHigh * action.payload };
    }

    /* Child amounts/dependents */

    case "CHILDRESET": {
      return { ...state, dependents: 0 };
    }
    case "CHILDREN": {
      return { ...state, dependents: Number(action.payload) };
    }

    /* Eligible Housing */
    case "HOUSING": {
      return { ...state, housing: action.housing };
    }

    /* Additonal Amounts */
    case "ADDITIONAL": {
      return { ...state, additional: action.additional };
    }

    /* Personal Amounts */
    case "SELECT": {
      return {
        ...state,
        stateCouple: "NONE",
        couple_value: 0,
        savingsCredit: 0,
      };
    }
    case "SINGLE": {
      return {
        ...state,
        stateCouple: "SINGLE",
        couple_value: elements.GPCsingle,
      };
    }
    case "COUPLE": {
      return {
        ...state,
        stateCouple: "COUPLE",
        couple_value: elements.GPCcouple,
      };
    }
    case "NONE": {
      return { ...state, claimType: "" };
    }
    case "GPC": {
      return { ...state, claimType: "GPC" };
    }
    case "GPCSC": {
      return { ...state, claimType: "GPCSC" };
    }

    /* savings credit thresholds */

    case "SCSINGLE": {
      return { ...state, savingsCredit: action.payload };
    }
    case "SCCOUPLE": {
      return { ...state, savingsCredit: action.payload };
    }
    case "SCNONE": {
      return { ...state, savingsCredit: 0 };
    }
    default:
  }
};

const Main = (props) => {
  const [applicable, dispatchReducer] = useReducer(PC_REDUCER, {
    applicableAmount: 0,

    additional: 0,
    couple_value: 0,
    savingsCredit: 0,
    stateCouple: "NONE",
    claimType: "",
    housing: 0,
    dependents: 0,
    dislow: 0,
    dishigh: 0,
    TOTAL: 0,
    TARIFF: 0,
    income: 0,
  });

  useEffect(() => {
    if (
      applicable.claimType === "GPCSC" &&
      applicable.stateCouple === "SINGLE"
    ) {
      dispatchReducer({ type: "SCSINGLE", payload: elements.SCSingle });
    }
    if (
      applicable.claimType === "GPCSC" &&
      applicable.stateCouple === "COUPLE"
    ) {
      dispatchReducer({ type: "SCCOUPLE", payload: elements.SCCouple });
    }
    if (applicable.claimType === "GPC") {
      dispatchReducer({ type: "SCNONE" });
    }
  }, [applicable.stateCouple, applicable.claimType]);

  /*Find total applicable */

  useEffect(() => {
    let A = applicable.couple_value;
    let B = applicable.additional;
    let C = applicable.housing;
    let D = applicable.dependents;
    let E = applicable.dislow;
    let F = applicable.dishigh;
    let total = (A + B + C + D + E + F).toFixed(2);
    dispatchReducer({ type: "TOTAL", payload: total });
  }, [
    applicable.couple_value,
    applicable.additional,
    applicable.housing,
    applicable.dependents,
    applicable.dislow,
    applicable.dishigh,
  ]);

  return (
    <Fragment>
      <h2 className={classes.heading}>Pension Credit Calculator: {version} </h2>
      <section className={classes.wrapper}>
      <div className={classes.container}>
        <section className={classes.section}>
          <PA updateAction={dispatchReducer} />
          <Additional updateAction={dispatchReducer} />
          <Housing updateAction={dispatchReducer} />
          <Children updateAction={dispatchReducer} />
          
        </section>
        <section>
          <Capital updateAction={dispatchReducer} />
          <Income updateAction={dispatchReducer} />
        </section>
      </div>
      <Award
            updateAction={dispatchReducer}
            applicableamount={applicable.TOTAL}
            income={applicable.TARIFF + applicable.income}
            couple={applicable.stateCouple}
          />
      </section>
    </Fragment>
  );
};

export default Main;
