import React, { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operation, setOperation]= useState('add')
    const [result, setResult] = useState('')

    const calculate = () => {
        const n1 = parseFloat(num1)
        const n2 = parseFloat(num2)

        if (isNaN(n1) || isNaN(n2)) {
            setResult('enter valid number please')
            return;
        }

        if (operation === 'add') setResult(n1 + n2);
        if (operation === 'subtract') setResult(n1 - n2);
        if (operation === 'multiply') setResult(n1 * n2);
        if (operation === "divide") setResult(n2 !== 0 ? n1 / n2 : "cannot divide by zero");
    }

    return (
        <>
            <div>
                <h1>Calculator</h1>
                <input
                 type="number"
                 placeholder="first number"
                 value={num1}
                 onChange={(e) => setNum1(e.target.value)}
                  />

                  <input
                   type="number"
                   placeholder="second number"
                   value={num2}
                   onChange={(e) => setNum2(e.target.value)}
                    />

                    <br />

                    <select 
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                    >
                        <option value="add">Add</option>
                        <option value="subtract">subtract</option>
                        <option value="multiply">multiply</option>
                        <option value="divide">divide</option>
                    </select>

                    <br />

                    <button onClick={calculate}>calculate</button>

                    <h2>{result && `result: ${result}`}</h2>
            </div>
        </>
    )
}

export default Calculator;