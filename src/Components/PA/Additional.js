import React, { Fragment }from 'react'

export default function Additional() {
  return (
    <div className={classes.container}>
        <h5>Additional Amounts</h5>
        <label htmlFor='sdp'>Severe Disabilty
            <select id="sdp">
                <option>--select</option>
                <option>One</option>
                <option>Both</option>
                <option>None</option>
            </select>
        </label>
        <label htmlFor='care'>Carer
            <select id="care">
                <option>--select</option>
                <option>One</option>
                <option>Both</option>
                <option>None</option>
            </select>
        </label>
    </div>
  )
}
