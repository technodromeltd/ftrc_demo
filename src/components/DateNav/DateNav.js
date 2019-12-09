import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateNav.module.css';

const DateNav = () => {
  var now = new Date();

  var month = now.getMonth()+1
  var day = now.getDate()
  var year = now.getFullYear()
  const date = day+"."+month+"."+year
  return(
  <div className={styles.DateNav}>
    {date}
  </div>
);
  }
DateNav.propTypes = {};

DateNav.defaultProps = {};

export default DateNav;
