import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "5cdbe3e5o1ab49bf1ed39fb1d03ec3ct";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="search-Input">
          <label>What word do you want to look up?</label>
          <br />
          <input type="search" onChange={handleKeywordChange} />
        </div>
      </form>
      <Result result={result} />
    </div>
  );
}
