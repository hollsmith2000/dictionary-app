import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p className="Meaning-Definition">{props.meaning.definition}</p>

        <em>
          <p>{props.meaning.example}</p>
        </em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
