/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Titles from './Components/Titles/Titles';
import Form from './Components/Form/Form';
import Weather from './Components/Weather/Weather';

export default class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}
