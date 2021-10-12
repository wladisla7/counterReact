import React from 'react'
import './CounterStep.css'

function CounterStep(props) {
    return (
        <div classname="wrapper">
            <input type="range"
                className="styleRange"
                min="1"
                value={props.step}
                onChange={props.onChangeStep}
                name="step"
            /> Change Step
        </div >
    )
}

export default CounterStep


 