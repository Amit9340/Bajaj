import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setApiResponse }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedJSON = JSON.parse(jsonInput); // Validate JSON
      setError(""); // Clear error if valid
      // Call REST API
      const response = await axios.post("https://your-api-endpoint.com", parsedJSON);
      setApiResponse(response.data);
    } catch (err) {
      setError("Invalid JSON format!");
      setApiResponse(null);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <textarea 
      className=" border-4"
        rows="5"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder="Enter valid JSON"
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button className=" bg-blue-700 px-4 py-1 rounded-md text-zinc-100" type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default InputForm;
