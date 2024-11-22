import React, { useState } from "react";
import InputForm from "./Components/InputForm";
import Dropdown from "./Components/Dropdown";
import ResponseDisplay from "./Components/ResponseDisplay";

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Set roll number as title
  React.useEffect(() => {
    document.title = "YOUR_ROLL_NUMBER";
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-5xl font-bold uppercase text-center ">JSON Validator</h1>
      <InputForm setApiResponse={setApiResponse} />
      {apiResponse && (
        <>
          <Dropdown setSelectedOptions={setSelectedOptions} />
          <ResponseDisplay response={apiResponse} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
