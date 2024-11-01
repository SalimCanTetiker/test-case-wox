import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
      <option value="">Bir seçenek seçin</option>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
  );
};
export default Dropdown
