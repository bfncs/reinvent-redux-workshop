import React from 'react';
import PropTypes from 'prop-types';

const BinaryDecision = ({ value, toggle }) => (
  <div>
    {value ? 'Yes' : 'No'}
    <button onClick={toggle}>Toggle</button>
  </div>
);

BinaryDecision.propTypes = {
  value: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default BinaryDecision;
