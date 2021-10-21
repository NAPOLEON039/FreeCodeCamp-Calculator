import React, {useState} from 'react'
import Buttons from './Buttons'
import Display from './Display'

import '../styles/Calculator.css'

let valuesToEvaluate = []
const Calculator = () => {
    let [displayCharacter, sendDisplay] = useState(["0"])

    const operators = ["+", "-", "/", "*"]

    
    function sendToDisplay(val) {
        if(val == "C") {
            sendDisplay(["0"])
            valuesToEvaluate = []
            return
        } else if (val === ".") {
            if (!valuesToEvaluate.join("").match(/\./)) {
                valuesToEvaluate.push(val)
            } else if (valuesToEvaluate[valuesToEvaluate.length - 1] === "." || valuesToEvaluate.join("").match(/\.\d+$/) || operators.includes(valuesToEvaluate[valuesToEvaluate.length - 1])) {
                return
            } else {
                valuesToEvaluate.push(val)
            }
        } else if(operators.includes(val)) {
            if (val == valuesToEvaluate[valuesToEvaluate.length - 1]) {
                return
            } else if (operators.includes(valuesToEvaluate[valuesToEvaluate.length - 1]) && val !== "-") {
                valuesToEvaluate.pop()
                valuesToEvaluate.push(val)
            } else if (valuesToEvaluate[valuesToEvaluate.length - 1] === "+" && val === "-") {
                valuesToEvaluate.pop()
                valuesToEvaluate.push(val)
            } else {
                valuesToEvaluate.push(val)
            }
        } else if(val == "=") {
            let result = calculate(valuesToEvaluate.join(''))
            valuesToEvaluate = [result]
            sendDisplay([result])
            return
        }
        else {
            valuesToEvaluate.push(val)
        }
        valuesToEvaluate = valuesToEvaluate.join("").replace(/^0{2,}/, "0").split("")

        if (valuesToEvaluate.join("").match(/[+\-\/\*]{2,}/) && !valuesToEvaluate.join("").match(/\-/)) {
            let multipleOperators = valuesToEvaluate.join("").match(/[+\-\/\*]{2,}/)[0]
            valuesToEvaluate = valuesToEvaluate.join("").replace(multipleOperators, multipleOperators.substr(-1, 1)).split("")
        }

        displayCharacter = [...valuesToEvaluate]
        sendDisplay(displayCharacter.join(""))
    }

    function calculate(values) {
        return eval(values)
    }

    return (
        <div className="calculator">
            <Display character={displayCharacter} />
            <Buttons clicked={sendToDisplay} />
        </div>
    )
}

export default Calculator