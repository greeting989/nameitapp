import React from "react";
import Card from "./Card";
import "./Resultconatiner.css";
function Resultcontainer({ suggNames }) {
  const suggNamesJsx = suggNames.map((suggestedNames) => {
    return <Card suggestedNames={suggestedNames} />;
  });
  return <div className="resultcontaier">{suggNamesJsx}</div>;
}

export default Resultcontainer;
