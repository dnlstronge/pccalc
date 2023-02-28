import React, { Fragment, useReducer } from "react";
import Housing from "../Housing/Housing";
import Additional from "../PA/Additional";
import Children from "../Children/Children"
import PA from "../PA/PA";
import classes from "./Main.module.css";


const PC_REDUCER = (state, action) => {
if(action.type === "SELECT") {
    return {...state, stateCouple: false}
}   
if(action.type === "SINGLE") {
    return {...state, stateCouple: false}
}
if(action.type === "COUPLE") {
    return {...state, stateCouple: true}
}
if(action.type === "NONE") {
    return {...state, claimType: ""}
}
if(action.type === "GPC") {
    return {...state, claimType: "GPC"}
}
if(action.type === "GPCSC") {
    return {...state, claimType: "GPCSC"}
}
}

const Main = (props) => {
    const [applicable, dispatchReducer] = useReducer(PC_REDUCER, {
        applicableAmount: 0,
        income: 0,
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