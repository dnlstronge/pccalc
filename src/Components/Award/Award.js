import React, { useEffect } from "react";
import calculate from "../Logic/PensionCredit"
import classes from "./Award.module.css"






const Award = ({
    income, applicableamount, couple
}) => {

    useEffect(() => {
    calculate(applicableamount, income, couple)
    }, [income, applicableamount, couple])


    return (
        <React.Fragment>
            <div className={classes.container}></div>
        </React.Fragment>
    )
    }
export default Award;