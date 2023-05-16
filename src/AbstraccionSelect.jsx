import React, { useState } from "react";

const AbstraccionSelect = () => {


  const [selected, setSelected] = useState(1);
  const [selectedTalle,setSelectedTalle] = useState(1)
  
  const options = [
    { value: 1, text: "Azul" },
    { value: 2, text: "Rojo" },
    { value: 3, text: "Negro" },
  ];


  const optionsTalle = [
    { value: 1, text: "L" },
    { value: 2, text: "XL" },
    { value: 3, text: "XXL" },
  ];


  const handleOnSelect = (value) => setSelected(value);
  const handleOnSelectTalle = (value) => setSelectedTalle(value)

  return (
    <div>
      <Select
        onSelect={handleOnSelect}
        options={options}
        defaultOption={selected}
      />
      <h1>Se selecciono opcion {selected}</h1>
      <Select
        onSelect={handleOnSelectTalle}
        options={optionsTalle}
      />

      <h1>Se selecciono opcion para talle {selectedTalle}</h1>
    </div>
  );
};

export default AbstraccionSelect;





const Select = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {options.map((option,index) => (
        <option key={index} value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};
