import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  // create lifecycle #1
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "abc1", name: "Max", age: 28 },
      { id: "abc2", name: "Manu", age: 26 },
      { id: "abc3", name: "Prad", age: 30 }
    ],
    showPersons: false
  };

  // create lifecycle #2
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // // deprecated
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  // create lifecycle #4
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // update lifecycle
  shouldComponentUpdate(prevProps, prevState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  // update lifecycle
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  togglePersonsHandker = () => {
    let doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // javascript legacy
    // person = Object.New({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = index => {
    const persons = this.state.persons.slice();
    // using spread operator
    // const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  // create lifecycle #3
  // will render child components
  render() {
    console.log("[App.js] rendering...");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandker}
        />
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default App;
