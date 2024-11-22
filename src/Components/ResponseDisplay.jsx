import React from "react";

const filterResponse = (response, selectedOptions) => {
  const result = {};
  if (selectedOptions.includes("alphabets")) {
    result.alphabets = response.alphabets;
  }
  if (selectedOptions.includes("numbers")) {
    result.numbers = response.numbers;
  }
  if (selectedOptions.includes("highestLowercase")) {
    result.highestLowercase = response.highestLowercase;
  }
  return result;
};

const ResponseDisplay = ({ response, selectedOptions }) => {
  if (selectedOptions.length === 0) return null;

  const filteredResponse = filterResponse(response, selectedOptions);

  return (
    <div>
      <h3>Response:</h3>
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
