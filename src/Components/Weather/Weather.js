/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Weather = props => (
  <div className="weather__info">
    {
        props.city && props.country && <p className="weather__key"> Location:<span className="weather__value"> {props.city}, {props.country}</span></p>
    }
    {
        props.temperature && <p className="weather__key"> Temperature: <span className="weather__value"> {props.temperature}</span> </p>
    }
    {
        props.humidity && <p className="weather__key" > Humidity: <span className="weather__value"> {props.humidity}</span> </p>
    }
    {
        props.description && <p className="weather__key"> Conditions: <span className="weather__value"> {props.description}</span> </p>
    }
    {
        props.error && <p className="weather__error"> {props.error}</p>
    }
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
