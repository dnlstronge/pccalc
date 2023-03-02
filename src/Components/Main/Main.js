import React, { Fragment, useReducer } from "react";
import Housing from "../Housing/Housing";
import Additional from "../PA/Additional";
import Children from "../Children/Children"
import PA from "../PA/PA";
import classes from "./Main.module.css";


const PC_REDUCER = (state, action) => 

    {

    switch (action.type) {
    case "SELECT": {
        return {...state, stateCouple: false}
    }
    case "SINGLE": {
        return {...state, stateCouple: false}
    }
    case "COUPLE": {
        return {...state, stateCouple: true}
    }
    case "NONE": {
        return {...state, claimType: ""}
    }
    case "GPC": {
        return {...state, claimType: "GPC"}
    }
    case "GPSC": {
        return {...state, claimType: "GPCSC"}
    }
    default:
    }
    }

const Main = (props) => {
    const [applicable, dispatchReducer] = useReducer(PC_REDUCER, {
        applicableAmount: 0,
        income: 0,
        additional: 0,
        stateCouple: false,
        claimType: ""
    } )
    return (
        <Fragment>
            <PA updateAction={dispatchReducer}/>
            <Additional updateAction={dispatchReducer}/>
            <Housing/>
            <Children/>

            {/* State value display: */}
            <div className={classes.statecontainer}>
                <p className={classes.state_p}>Applicable Amount: {applicable.applicableAmount} </p>
                <p className={classes.state_p}>Income: {applicable.income}</p>
                <p className={classes.state_p}>Is couple: {applicable.stateCouple ? "true" : "false" }</p>
                <p className={classes.state_p}>Claim Type: {applicable.claimType}</p>
            </div>
        </Fragment>
    )
}

export default Main;