import React, { Fragment } from "react";
import Additional from "../PA/Additional";
import PA from "../PA/PA";
import classes from "./Main.module.css";

const Main = (props) => {
    return (
        <Fragment>
            <PA/>
            <Additional/>
        </Fragment>
    )
}

export default Main;