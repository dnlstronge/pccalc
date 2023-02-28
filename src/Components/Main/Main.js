import React, { Fragment, useReducer } from "react";
import Housing from "../Housing/Housing";
import Additional from "../PA/Additional";
import Children from "../Children/Children"
import PA from "../PA/PA";
import classes from "./Main.module.css";


const PC_REDUCER = (state, action) => {

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
            <Additional/>
            <Housing/>
            <Children/>
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