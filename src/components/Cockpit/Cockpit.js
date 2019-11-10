import React from "react";

import classses from "./Cockpit.module.css";

const cockpit = props => {
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classses.Red;
  }

  const fontStyles = [];

  if (props.persons.length <= 2) {
    fontStyles.push(classses.red);
  }

  if (props.persons.length <= 1) {
    fontStyles.push(classses.bold);
  }
  return (
    <div className={classses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={fontStyles.join(" ")}>This is working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
