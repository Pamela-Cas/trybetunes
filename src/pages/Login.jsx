import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../component/Loading';

export default class Login extends Component {
  state = {
    btn: true,
    value: '',
    load: false,
    redirect: false,
  }

  handleInput = ({ target: { value } }) => {
    const numberVerification = 3;
    const verification = (value.length >= numberVerification);
    this.setState(() => ({
      btn: !verification,
      value,
    }));
  }

  componenLoading = async (event) => {
    event.preventDefault();
    const { value } = this.state;
    this.setState(() => ({
      load: true,
    }));
    await createUser({ name: value });
    this.setState(() => ({
      load: false,
      btn: true,
      redirect: true,
    }));
  }

  render() {
    const { btn, load, redirect } = this.state;
    const { handleInput } = this;
    const { componenLoading } = this;
    if (load) {
      return <Loading />;
    }
    if (redirect) {
      return <Redirect to="/search" />;
    }
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="name">
            <input
              data-testid="login-name-input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={ handleInput }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ btn }
            onClick={ componenLoading }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
