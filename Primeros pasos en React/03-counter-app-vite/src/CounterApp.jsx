import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  // console.log("render");
  // Hook
  const [counter, setCounter] = useState(value);
  // Funciones
  const handleAdd = () => {
    // console.log(event);
    setCounter(counter + 1);
    // setCounter(1000);
    // setCounter((c) => c + 1);
  };
  // No se necesita la funcion de flecha, se puede llamar directamente el setCounter
  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  //Simplificado:
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      {/* solo se envia la referencia a esta funcion: */}

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
