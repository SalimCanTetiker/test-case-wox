import React, { useState } from 'react';

const OptionButton = ({choice}) => {
  const [selectedOption, setSelectedOption] = useState(''); // Seçilen seçeneği saklayacak durum

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label className="flex flex-row items-center space-x-2 m-3">
        <input
          type="radio"
          value="Seçenek 1"
          checked={selectedOption === 'Seçenek 1'}
          onChange={handleOptionChange}
          className="mr-2"
        />
        <div>{choice}</div>
      </label>
    </div>
  );
};

export default OptionButton;
