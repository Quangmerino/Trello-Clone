import React, { useState } from "react";

type Props = {
    value:string,
}

function InputCustom({value}:Props) {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
  
  return (
    <input
      className="text-black bg-white outline-0 w-full"
      value={inputValue}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default InputCustom;
