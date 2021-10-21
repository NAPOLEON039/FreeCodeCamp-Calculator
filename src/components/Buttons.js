import React from 'react'
import Button from './Button'

import '../styles/Buttons.css'

const Buttons = ({clicked}) => {
    const firstRowButtonValues = {
        seven: 7,
        eight: 8,
        nine: 9
    }
    const secondRowButtonValues = {
        four: 4,
        five: 5,
        six: 6
    }
    const thirdRowButtonValues = {
        one: 1,
        two: 2,
        three: 3
    }
    const fourthRowButtonValues = {
        zero: 0,
        decimal: '.'
    }
    const operatorButtonValues = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/'
    }
    
    function sendClickedValue(clickedValue) {
        // send the value back to Calculator.js
        clicked(clickedValue)
    }
    return (
        <div id="buttons-group">
            <div id="numbers">
                <div className="row">
                    {
                        Object.keys(firstRowButtonValues).map((buttonKey) => <Button id={buttonKey} key={`btn-${buttonKey}`} value={firstRowButtonValues[buttonKey]} clicked={sendClickedValue} />)
                    }
                </div>
                <div className="row">
                    {
                        Object.keys(secondRowButtonValues).map((buttonKey) => <Button id={buttonKey} key={`btn-${buttonKey}`} value={secondRowButtonValues[buttonKey]} clicked={sendClickedValue} />)
                    }
                </div>
                <div className="row">
                    {
                        Object.keys(thirdRowButtonValues).map((buttonKey) => <Button id={buttonKey} key={`btn-${buttonKey}`} value={thirdRowButtonValues[buttonKey]} clicked={sendClickedValue} />)
                    }
                </div>
                <div className="row">
                    {
                        Object.keys(fourthRowButtonValues).map((buttonKey) => <Button id={buttonKey} key={`btn-${buttonKey}`} value={fourthRowButtonValues[buttonKey]} clicked={sendClickedValue} />)
                    }
                </div>
            </div>
            <div id="operators">
                {
                    <Button id="clear" styling={{display: 'flex', justifyContent: 'flex-end'}} key="btn-clear" value="C" clicked={sendClickedValue} />
                }
                <div id="operators__signs">
                    {
                        Object.keys(operatorButtonValues).map((buttonKey) => <Button id={buttonKey} key={`btn-${buttonKey}`} value={operatorButtonValues[buttonKey]} clicked={sendClickedValue} />)
                    }
                </div>
                {
                    <Button id="equals" key="btn-equals" value="=" clicked={sendClickedValue} />
                }
            </div>
        </div>
    )
}

export default Buttons