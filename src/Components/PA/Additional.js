import React, { useState, useEffect }from 'react'
import classes from "./Additional.module.css"
import AA from "../ApplicableAmounts/AA"


const PCE = AA

export default function Additional({ updateAction }) {
    const [temp, setTemp] = useState(0)
    const [additional, setAdditional] = useState({
        SDP: 0,
        CA: 0,
        TRANS: 0
    })
   

    const handleSDP = (e) => {
        if(e.target.value === "SDPNULL") {
            setAdditional({
            ...additional, SDP: 0
        })
        } 
        if(e.target.value === "SDPONE") {
            setAdditional({
                ...additional, SDP: PCE.SDP
            })
        }
        if(e.target.value === "SDPONE") {
            setAdditional({
                ...additional, SDP: PCE.SDP2
            })
        }
     }




    const handleCarer = (e) => {
        if(e.target.value === "CARENULL") {
            setAdditional({...additional, CA: 0})
        }
        if(e.target.value === "CAREONE") {
            setAdditional({...additional, CA: PCE.CARE})
        }
        if(e.target.value === "CAREBOTH") {
            setAdditional({...additional, CA: PCE.CARE2})
        }
    }

    const handleTransitional = (e) => {
        setAdditional({...additional, TRANS: e.target.value.toFixed(2)})
    }

    useEffect((setTemp) => {
        let a = additional.SDP
        let b = additional.CA
        let c = additional.TRANS
        setTemp(a + b + c)
        console.log(temp)
    }, [additional.SDP, additional.CA, additional.TRANS])

  return (
    <div className={classes.container}>
        <h5>Additional Amounts</h5>
        <label className={classes.label} htmlFor='sdp'>Severe Disabilty
            <select onChange={handleSDP} className={classes.select} id="sdp">
                <option value="SDPNULL">--select</option>
                <option value="SDPONE">One</option>
                <option value="SDPBOTH">Both</option>
                <option calue="SDPNULL">None</option>
            </select>
        </label>
        <label className={classes.label} htmlFor='care'>Carer
            <select onChange={handleCarer} className={classes.select} id="care">
                <option value="CARENULL">--select</option>
                <option value="CAREONE">One</option>
                <option value="CAREBOTH">Both</option>
                <option value="CARENULL">None</option>
            </select>
        </label>
        <label onChange={handleTransitional} className={classes.label} htmlFor='trans'>Transitional Amount (pw)
            <input className={classes.input} type="number" id="trans" />
        </label>
    </div>
  )
}
