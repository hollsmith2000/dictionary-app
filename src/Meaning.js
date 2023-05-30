import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="Meaning-Definition">{props.meaning.definition}</p>

      <em>
        <p>"{props.meaning.example}"</p>
      </em>
    </div>
  );
}
