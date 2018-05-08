/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
);

Form.propTypes = {
  getWeather: PropTypes.func,
};

export default Form;
