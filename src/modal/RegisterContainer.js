import React, { Component } from 'react';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      adult: '',
      error: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    if (this.state.password !== event.target.value) {
      this.confirmPasswordRef.setCustomValidity("Passwords Don't Match");
    }
    this.setState({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      adult: '',
    });
    event.preventDefault();
  }

  handleChange = (event) => {
    let inputObject = {};
    inputObject[event.target.name] = event.target.value;
    this.setState(inputObject);
  }

  render() {
    return(
      <div>
        <h1>Register</h1>
        <div className="error-message">{this.state.error}</div>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input onChange={this.handleChange} type="text" name='username' value={this.state.username}
              required autoFocus />
          </label>
          <label>Email
            <input onChange={this.handleChange} type="email" name='email' value={this.state.email}
              pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              required />
          </label>
          <label>Password
            <input onChange={this.handleChange} type="password" name='password' value={this.state.password}
              required />
          </label>
          <label>Confirm Password
            <input ref={(input) => { this.confirmPasswordRef = input; }}
              onChange={this.handleChange} type="password" name='passwordConfirm' value={this.state.passwordConfirm}
              required />
          </label>
          <label>Are you older than 18?
            <input onChange={this.handleChange} type="checkbox" name='adult' value={this.state.adult} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RegisterContainer;
