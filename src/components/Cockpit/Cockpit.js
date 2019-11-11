import React, { useEffect } from "react";

import classses from "./Cockpit.module.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 3000);
    return () => {
      console.log("[Cockpit.js] cleanup in useEffect");
    };
  }, []);

  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect");
  // });

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

export default Cockpit;
