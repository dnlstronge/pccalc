import React, {useState, useEffect} from "react"; 
import classes from "./Income.module.css"
import IncomeSelect from "./IncomeSelect.js"


const Income = ({updateAction}) => {

    const [local, setLocal ] = useState({
       
        DR: 0,
        Total: 0,
        SUM: (a, b, c, d, e, f, g, h, i, j) => {
          return local.Total = a + b + c + d + e + f + g + h + i -j
        }
        
    })
   const [val_1, setVal_1] = useState(0)
   const [val_2, setVal_2] = useState(0)
   const [val_3, setVal_3] = useState(0)
   const [val_4, setVal_4] = useState(0)
   const [val_5, setVal_5] = useState(0)
   const [val_6, setVal_6] = useState(0)
   const [val_7, setVal_7] = useState(0)
   const [val_8, setVal_8] = useState(0)
   const [val_9, setVal_9] = useState(0)

   useEffect(() => {
    setLocal({...local, Total: local.SUM(val_1, val_2, val_3, val_4, val_5, val_6, val_7, val_8, val_9, local.DR)})
   }, [val_1, val_2, val_3, val_4, val_5, val_6, val_7, val_8, val_9, local.DR, local])

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
                <IncomeSelect id="a" localState={local} updateState={setVal_1}/>
                <div>Testing Total {local.Total}</div>
            </div>
        </React.Fragment>
    )
}

export default Income;