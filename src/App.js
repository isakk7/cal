import { useState } from 'react';

function App() {

  const crearDigitos = () => {
    const digitos = [];
    for (let i = 0; i < 10; i++) {
      digitos.push( <button key={i}>{i}</button>)
    }

  return (
    <div className="App">
       <div className="calculadora">
       <div className="display">
         <span>(0)</span> 0
         </div>

         <div className="operators">
           <button>/</button>
           <button>+</button>
           <button>-</button>
           <button>*</button>
           <button>DEL</button>
         </div>
         <div className="digitos">
           {crearDigitos()}
           <button>0</button>
           <button>.</button>
           <button>=</button>
         </div>
       </div>
    </div>
  );
}

}
