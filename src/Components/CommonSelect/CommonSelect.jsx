/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

export default function CommonSelect({ dataset }) {
  if (!Array.isArray(dataset)) {
    return null;
  }

  const [value, setValue] = useState("");

  const onHandleChange = (event) => {
    setValue(event.target.value);
    console.log("first")
  };
  console.log(value);

  return (
    <div>
      <select onChange={onHandleChange} value={value}>
        {dataset.map((data) => (
          <option >{data.name}</option>
        ))}
      </select>
    </div>
  );
}
