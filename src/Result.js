import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Results">
        <section>
          <h1>{props.result.word}</h1>
          <h4>{props.result.phonetic}</h4>
        </section>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
