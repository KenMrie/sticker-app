import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap'

export const FormTest = () => {
  const [age, setAge] = useState("");

  const showContent = () => {
    if (age >= 21) {
      alert('Que bebida desea tomar?');
    } else {
      alert('Lo siento, eres menor de edad');
    }
    setAge("")
  };

const handleInput = (e) => {
  const valor = e.target.value
  console.log(valor)
  setAge(valor)
} 

  return (
    <>
        <input
        type='number'
          name='age'
          value={age}
          onChange={handleInput}
        />
        <Button onClick={showContent}> Confirma tu edad </Button>
    </>
  );
};