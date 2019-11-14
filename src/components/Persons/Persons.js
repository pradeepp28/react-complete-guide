import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // // update lifecycle #1
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // update lifecycle #2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (nextProps.persons !== this.props.persons) {
      return true;
    }
    return false;
  }

  // update lifecycle #4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "SnapShot!" };
  }

  // update lifecycle #5
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapShot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  // update lifecycle #3
  render() {
    console.log("[Persons.js] rendering ...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
