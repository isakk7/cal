import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "-", "*", "/", "."];
  const updateCalc = value  => {
    if (
      // eslint-disable-next-line
        ops.includes(value) && calc === '' ||
        // eslint-disable-next-line
        ops.includes(value) && ops.includes(calc.slice(-1))
    )
    {
        return;
    }
    setCalc(calc + value);
// eslint-disable-next-line
    if (!ops.includes(value)) {
      // eslint-disable-next-line
        setResult(eval(calc + value).toString());
    }


  } 


  const crearDigitos = () => {
    const digitos = [];
    for (let i = 0; i < 10; i++) {
      digitos.push( <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>)
    }

    return digitos;
  }
// eslint-disable-next-line
  const calcular = () => {
    // eslint-disable-next-line
    setCalc(eval(calc).toString());
  }

  const limpiar = () => {
    if (calc === '') {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  }


  return (
    <div className="App">
       <div className="calculadora">
       <div className="display">
        {result ? <span>({result})</span> : '' }&nbsp; {calc || "0" } 
         </div>

         <div className="operators">
           <button onClick={() => updateCalc('/')}>/</button>
           <button onClick={() => updateCalc('+')}>+</button>
           <button onClick={() => updateCalc('-')}>-</button>
           <button onClick={() => updateCalc('*')}>*</button>
           <button onClick={limpiar}>DEL</button>
         </div>
         <div className="digitos">
           {crearDigitos()}
           <button onClick={() => updateCalc('0')}>0</button>
           <button onClick={() => updateCalc('.')}>.</button>
           <button onClick={calcular}>=</button>
         </div>
       </div>
    </div>
  );
}

export default App;