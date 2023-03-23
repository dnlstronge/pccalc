import React, { useEffect, useState } from "react";
import calculate from "../Logic/PensionCredit"
import classes from "./Award.module.css"






const Award = ({
    income, applicableamount, couple
}) => {
    const [GPC, setGPC] = useState(0);
    const [SC, setSC ] = useState(0)


    useEffect(  () => {
    let PCAWARD = calculate(applicableamount, income, couple)
    setGPC(PCAWARD.guaranteed)
    setSC(PCAWARD.savings)
    }, [income, applicableamount, couple])


    return (
        <React.Fragment>
            <div className={classes.container}>
               <p>Savings Credit awarded: {SC}</p>
               <p>Guaranteed Credit awarded {GPC}</p>
            </div>
            
        </React.Fragment>
    )
    }
export default Award;