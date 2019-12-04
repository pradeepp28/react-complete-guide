import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/WithClass";

import AuthContext from "../../../context/auth-context"

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering ...");
    console.log("[Person.js] isAuth", this.props.isAuth)
    return (
      <Aux>
        <AuthContext.Consumer>
        {(context) =>
          context.authenticated ? <p>Authenticated</p>: <p>Log In</p>
        }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          //ref={inputEl => (this.inputElement = inputEl)}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
