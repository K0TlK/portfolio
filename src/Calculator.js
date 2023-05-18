import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);

  function handleCalculate(e) {
    e.preventDefault();
    const [number1, operator, number2] = e.target.elements;

    let calculation;
    switch (operator.value) {
      case '+':
        calculation = parseFloat(number1.value) + parseFloat(number2.value);
        break;
      case '-':
        calculation = parseFloat(number1.value) - parseFloat(number2.value);
        break;
      case '*':
        calculation = parseFloat(number1.value) * parseFloat(number2.value);
        break;
      case '/':
        calculation = parseFloat(number1.value) / parseFloat(number2.value);
        break;
      default:
        return;
    }

    setResult(calculation);
  }

  return (
    <div>
      <h2>Калькулятор</h2>
      <form className="calculator-form" onSubmit={handleCalculate}>
        <input type="number" name="number1" step="any" required />
        <select name="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" name="number2" step="any" required />
        <button type="submit">Посчитать</button>
      </form>
      <p className="calculator-result">Результат: {result}</p>
      <p>_</p>
    </div>
  );
}

export default Calculator;
