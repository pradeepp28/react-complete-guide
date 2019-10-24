import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'abc1', name: 'Max', age: 28},
      { id: 'abc2', name: 'Manu', age: 26},
      { id: 'abc3', name: 'Prad', age: 30}
    ],
    showPersons: false
  }

  togglePersonsHandker = () => {
    let doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // javascript legacy
    // person = Object.New({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice()
    // using spread operator
    // const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        this.state.persons.map( (person, index) => {
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name = {person.name} 
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.nameChangeHandler(event, person.id)}/>
        })
      )
      style.backgroundColor = "red"
    }
    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push("red")
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold")
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button 
          style={style}
          onClick = {this.togglePersonsHandker}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default App;