import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.css';
import {Avatar} from '@material-ui/core'
import {connect} from 'react-redux'
import {Row} from 'simple-flexbox'
import defaultProfileImg from '../../../assets/eero_def_prof.jpg'
import{Link} from 'react-router-dom'
const User = (props) => (
  <div className={styles.User}>
    <Row alignItems="center">
    <Link to="/user"><Avatar className={styles.ProfileImg} alt="User name" src={defaultProfileImg}/></Link>
      <Link to="/logout">
      <h4 className={styles.userName}> Logout</h4>
      </Link>
    </Row>
    
  </div>
);

User.propTypes = {};

User.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    userDetails : state.userDetails
  }
} 
export default connect(mapStateToProps)(User);
