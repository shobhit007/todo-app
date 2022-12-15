import React, { useState } from "react";

function Form({ onChange }) {
  const [item, setItem] = useState("");
  return (
    <div className="form flex">
      <input
        type="text"
        placeholder="add details"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="btnAdd" onClick={() => item && onChange(item)}>
        Add
      </button>
    </div>
  );
}

export default Form;
