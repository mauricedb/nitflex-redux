import React, { Component, PropTypes } from 'react';

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
      rememberMe: false,
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRememberMeChange = this.onRememberMeChange.bind(this);
    this.login = this.login.bind(this);
  }

  onNameChange(e) {
    const name = e.target.value;
    this.setState({ name });
  }

  onPasswordChange(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  onRememberMeChange() {
    const rememberMe = !this.state.rememberMe;
    this.setState({ rememberMe });
  }

  login(e) {
    e.preventDefault();
    this
      .props
      .loginAsUser({ name: this.state.name, rememberMe: this.state.rememberMe });
  }

  render() {
    return (
      <form className="col-sm-6 col-sm-offset-3">
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            id="username"
            value={this.state.name}
            onChange={this.onNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              checked={this.state.rememberMe}
              onChange={this.onRememberMeChange}
            />
            Remember me on this device
          </label>
        </div>
        <button
          className="btn btn-primary"
          disabled={this.state.name.length === 0 || this.state.password.length === 0}
          onClick={this.login}
        >
          Sign In
        </button>
      </form>
    );
  }
}

LoginPage.propTypes = {
  loginAsUser: PropTypes.func.isRequired,
};

export default LoginPage;
