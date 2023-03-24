import React, {useState, useEffect} from "react"; 
import classes from "./Income.module.css"
import IncomeSelect from "./IncomeSelect.js"


const Income = ({updateAction}) => {

    const [local, setLocal ] = useState({
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        DR: 0,
        Total: 0,
        SUM: () => {
            let partTotal = 
                local.a+local.b+local.c+local.d+local.e-local.DR
                if(partTotal > 0) {
                   return setLocal({...local, Total: partTotal})
                }
        }
    })
    useEffect(() => {
        local.SUM()
    }, [local])


    const disregardHandler = (e) => {
        setLocal({...local, DR: Number(e.target.value)})
    }
    return (
        <React.Fragment>
            <div className={classes.container}>
                <h4 className={classes.heading}>Income</h4>
                <label  htmlfor="EDselect" className={classes.label}>Earnings Disregard
                    <select onChange={disregardHandler} id="EDselect" className={classes.select}>
                        <option value="0">--Select--</option>
                        <option value="0">None</option>
                        <option value="5">Single</option>
                        <option value="10">Couple</option>
                        <option value="20">Disability</option>
                    </select>
                </label>
                <IncomeSelect id="a" localState={local} updateState={setLocal}/>
                <div>Testing Total {local.Total}</div>
            </div>
        </React.Fragment>
    )
}

export default Income;