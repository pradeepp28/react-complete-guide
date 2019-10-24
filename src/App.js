import React, { Component } from 'react';
import classses from './App.module.css';
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
    let persons = null
    let btnClass = ''

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
      btnClass = classses.Red
    }
    const fontStyles = []

    if (this.state.persons.length <= 2) {
      fontStyles.push(classses.red)
    }

    if (this.state.persons.length <= 1) {
      fontStyles.push(classses.bold)
    }
    return (
      <div className={classses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={fontStyles.join(' ')}>This is working</p>
        <button className={btnClass}
          onClick = {this.togglePersonsHandker}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default App;