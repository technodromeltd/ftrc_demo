import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import img from '../../../assets/logo.png'
import {Link} from 'react-router-dom'
const Logo = () => (
  <div className={styles.Logo}>
   <Link to="/">
    <img src={img} alt="logo" width="200px"/>
    </Link>
  </div>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
