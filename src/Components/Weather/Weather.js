/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Weather = props => (
  <div>
    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.temperature && <p> Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);


Weather.propTypes = {
  temperature: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  humidity: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string,
};

export default Weather;
