'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import store from 'root/store.js';

// reference function to unsubscribe from redux store
let unsubscribe;

const inputContainer = React.createClass({

  propTypes: {
    add: React.PropTypes.func.isRequired,
  },

  submitHandler(e) {
    e.preventDefault();
    const text = this.refs.input.value;
    if (text === '') return;
    this.props.add(text);
    this.refs.input.value = '';
  },

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" ref="input" placeholder="Enter Todo..." />

        <button type="submit">
          Submit
        </button>
      </form>
    );
  },

});

export default inputContainer;