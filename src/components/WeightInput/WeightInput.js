import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeightInput.module.css';

const WeightInput = ({val}) => (
  <div className={styles.WeightInput}>
     <input  value={val}/>
     <label>gr</label>
  </div>
);

WeightInput.propTypes = {};

WeightInput.defaultProps = {};

export default WeightInput;
