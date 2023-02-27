import React, { Fragment } from "react";
import Housing from "../Housing/Housing";
import Additional from "../PA/Additional";
import Children from "../Children/Children"
import PA from "../PA/PA";
import classes from "./Main.module.css";

const Main = (props) => {
    return (
        <Fragment>
            <PA/>
            <Additional/>
            <Housing/>
            <Children/>
        </Fragment>
    )
}

export default Main;