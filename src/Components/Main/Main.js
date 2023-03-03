import React, { Fragment, useReducer } from "react";
import Housing from "../Housing/Housing";
import Additional from "../PA/Additional";
import Children from "../Children/Children";
import PA from "../PA/PA";
import classes from "./Main.module.css";

const PC_REDUCER = (state, action) => {
  switch (action.type) {
    /* Additonal Amounts */
    case "ADDITIONAL": {
      return { ...state, additional: action.additional };
    }

    /* Personal Amounts */
    case "SELECT": {
      return { ...state, stateCouple: false };
    }
    case "SINGLE": {
      return { ...state, stateCouple: false };
    }
    case "COUPLE": {
      return { ...state, stateCouple: true };
    }
    case "NONE": {
      return { ...state, claimType: "" };
    }
    case "GPC": {
      return { ...state, claimType: "GPC" };
    }
    case "GPSC": {
      return { ...state, claimType: "GPCSC" };
    }
    default:
  }
};

const Main = (props) => {
  const [applicable, dispatchReducer] = useReducer(PC_REDUCER, {
    applicableAmount: 0,
    income: 0,
    additional: 0,
    stateCouple: false,
    claimType: "",
  });
  return (
    <Fragment>
      <div className={classes.container}>
        <section className={classes.section}>
          <PA updateAction={dispatchReducer} />
          <Additional updateAction={dispatchReducer} />
          <Housing />
          <Children />
        </section>

        {/* State value display: */}

        <section className={classes.statecontainer}>
          <p className={classes.state_p}>
            Applicable Amount: {applicable.applicableAmount}{" "}
          </p>
          <p className={classes.state_p}>Income: {applicable.income}</p>
          <p className={classes.state_p}>
            Is couple: {applicable.stateCouple ? "true" : "false"}
          </p>
          <p className={classes.state_p}>Claim Type: {applicable.claimType}</p>
          <p className={classes.stae_p}>
            Additional Amounts: {applicable.additional.toFixed(2)}
          </p>
        </section>
      </div>
    </Fragment>
  );
};

export default Main;
