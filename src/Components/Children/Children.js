import React, { useState } from 'react';
import classes from "./Children.module.css";

export default function Children() {
    const [hasChild, setHasChild] = useState(false)

    const handleChild = () => {
        hasChild ? setHasChild(false) : setHasChild(true)
    }
    const handleLower = (e) => {}
    const handleHigher = (e) => {}

  return (
    <div className={classes.container}>
      <h5>Dependents</h5>
        <label className={classes.label} htmlFor='children'>The claim includes dependents
            <input onClick={handleChild} className={classes.checkbox} id="children" type="checkbox"></input>
        </label>
        <label htmlFor="deps" className={classes.label}>Select Number of dependents
            <select onchange={handleLower} id="deps" className={classes.select}>
                <option value="0">Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </label>
            <label htmlFor="dlaL" className={classes.label}>Disability lower
            <select onChange={handleHigher} id="dlaL" className={classes.select}>
                <option value="0">Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </label>
        
    </div>
  )
};
