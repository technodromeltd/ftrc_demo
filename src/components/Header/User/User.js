import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.css';
import {Avatar} from '@material-ui/core'
import {connect} from 'react-redux'
import {Row} from 'simple-flexbox'
import defaultProfileImg from '../../../assets/eero_def_prof.jpg'
import{Link} from 'react-router-dom'
import * as actions from '../../../store/actions/actions'
const User = (props) => (
  <div className={styles.User}>
    <Row alignItems="center" >
      <span style={{textAlign:'right'}}><Link to="/user">{props.userDetails.userName} </Link></span>
      <Link to="/user"><Avatar className={styles.ProfileImg} alt="User name" src={defaultProfileImg}/></Link>
     
        <h4 style={{cursor:'pointer'}} onClick={props.onLogout} className={styles.userName}> Logout</h4>
      
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout : () => dispatch(actions.logout())
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(User);
