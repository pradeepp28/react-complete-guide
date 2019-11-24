import React, { useEffect, useRef } from "react";

import classses from "./Cockpit.module.css";

const Cockpit = props => {
  const toggleBtnRef = useRef()

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click()
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 3000);
    return () => {
      console.log("[Cockpit.js] cleanup in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup in 2nd useEffect");
    };
  });

  let btnClass = "";

  if (props.showPersons) {
    btnClass = classses.Red;
  }

  const fontStyles = [];

  if (props.personsLength <= 2) {
    fontStyles.push(classses.red);
  }

  if (props.personsLength <= 1) {
    fontStyles.push(classses.bold);
  }
  return (
    <div className={classses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={fontStyles.join(" ")}>This is working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
