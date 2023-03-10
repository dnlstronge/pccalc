import React, { useState, useEffect } from "react";
import classes from "./Children.module.css";
import elements from "../ApplicableAmounts/AA";


export default function Children({ updateAction }) {
  const [hasChild, setHasChild] = useState(false);
  const [pre, setPre] = useState(false);
  const [numberChildren, setNumberChildren] = useState(0);
  const [temp, setTemp] = useState(0);
  

  const handleChild = () => {
    setNumberChildren(0)
    updateAction({type: "CHILDRESET"})
    hasChild ? setHasChild(false) : setHasChild(true);
  };
  const handlePre = () => {
    pre ? setPre(false) : setPre(true);
  };
  const handleNumber = (e) => {
  setNumberChildren(Number(e.target.value));
  };

  const handleLower = (e) => {
    updateAction({ type: "DISLOW", payload: Number(e.target.value) });
  };
  const handleHigher = (e) => {
    updateAction({ type: "DISHIGH", payload: Number(e.target.value) });
  };

  /*Conditional styling */

  const conditionalStyle = hasChild ? classes.label : classes.label_disabled;
  const conditionalBox = hasChild
    ? classes.label_checkbox
    : classes.label_checkbox_disabled;

  /* push to state:  */
useEffect(() => {
    let a = elements.childpre 
    let b = elements.childpost
    let c = numberChildren

    if(pre && c === 0) {
       return setTemp(c)
    }
    if(pre && c === 1) {
       return setTemp(a)
    }
    if(pre && c > 1) {
        return setTemp((c * b - b + a).toFixed(2))
    }
    else {
        return setTemp((b*c).toFixed(2))
    }

}, [numberChildren, pre])

useEffect(() => {
    updateAction({type: "CHILDREN", payload: temp})
}, [temp, updateAction,])

  return (
    <div className={classes.container}>
      <h5 className={classes.heading}>Dependents</h5>
      <label className={classes.label_checkbox} htmlFor="children">
        Include dependents
        <input
          onClick={handleChild}
          className={classes.checkbox}
          id="children"
          type="checkbox"
        ></input>
      </label>
      <label className={conditionalBox} htmlFor="children">
        Oldest born before April 2017
        <input
          disabled={!hasChild}
          onClick={handlePre}
          className={classes.checkbox}
          id="children"
          type="checkbox"
        ></input>
      </label>
      <label htmlFor="deps" className={conditionalStyle}>
        Number of dependents
        <select
          value={numberChildren}
          disabled={!hasChild}
          onChange={handleNumber}
          id="deps"
          className={classes.select}
        >
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
      <label htmlFor="dlaL" className={conditionalStyle}>
        Disability Lower
        <select
          disabled={!hasChild}
          onChange={handleLower}
          id="dlaL"
          className={classes.select}
        >
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
      <label htmlFor="dlaH" className={conditionalStyle}>
        Disability Higher
        <select
          disabled={!hasChild}
          onChange={handleHigher}
          id="dlaH"
          className={classes.select}
        >
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
      <div>number of children: {numberChildren}</div>
      <div>type: {typeof(numberChildren)}</div>
      <div>value: {temp}</div>
    </div>
  );
}
