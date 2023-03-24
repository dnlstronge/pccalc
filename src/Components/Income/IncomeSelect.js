import React from "react";
import classes from "./IncomeSelect.module.css"

const IncomeSelect = (props) => {
    return (
        <React.Fragment>
            <div className={classes.container}>
            <label className={classes.label} htmlFor="selectselect">
                <select className={classes.select} id="selectselect">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                </label>
            </div>
        </React.Fragment>
    )
}