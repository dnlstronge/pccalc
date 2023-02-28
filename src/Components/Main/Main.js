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
        stateCouple: 0
    } )
    return (
        <Fragment>
            <PA updateAction={dispatchReducer}/>
            <Additional/>
            <Housing/>
            <Children/>
        </Fragment>
    )
}

export default Main;