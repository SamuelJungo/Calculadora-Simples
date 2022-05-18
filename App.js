import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [nro1, setNor1]= useState(0);
  const [nro2, setNor2]= useState(0);
  const [resultado, setresultado]= useState(0);
  const [Operacao, setOperacao]= useState(Somar);
  const Calcular =()=>{
    if (Operacao =="Somar")
      return parseFloat(nro1) + parseFloat(nro2);
      else if (Operacao =="Subtrair")
      return parseFloat(nro1) - parseFloat(nro2);
      else if (Operacao =="Multiplicar")
      return parseFloat(nro1) * parseFloat(nro2);
      else  
      return parseFloat(nro1) /parseFloat(nro2);
  }
  useEffect(()=>{
    setresultado(Calcular());
  }),[nro1,nro2,resultado];
  return (
    <div className="App">
     <h1>Calculadora Sam</h1>
     <label>Primeiro Numero</label>

     <input type="number" value={nro1} onChange={(e) => setNor1(e.target.value)} />

     <label>Segundo Numero</label>
     <input type="number" value={nro2} onChange={(e) => setNor2(e.target.value)}/>
     <select onChange={(e)=> setOperacao(e.target.value)}>
       <option>Somar</option>
       <option>Subtrair</option>
       <option>Multiplicar</option>
       <option>Dividir</option>
     </select>
     <label>{resultado}</label>
    </div>
  );
}

export default App;
