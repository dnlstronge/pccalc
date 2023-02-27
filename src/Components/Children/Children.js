import React, { useState } from 'react';
import classes from "./Children.module.css";

export default function Children() {
    const [hasChild, setHasChild] = useState(false)

    const handleChild = () => {
        hasChild ? setHasChild(false) : setHasChild(true)
    }

  return (
    <div className={classes.container}>
        <label className={classes.label} htmlFor='children'>The claim includes dependents
            <input onClick={handleChild} className={classes.checkbox} id="children" type="checkbox"></input>
        </label>
    </div>
  )
};
