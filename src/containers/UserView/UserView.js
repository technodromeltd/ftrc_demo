import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserView.module.css';
import {connect} from 'react-redux'

import { Row, Column } from 'simple-flexbox';
import defaultProfileImg from '../../assets/eero_def_prof.jpg'
import { Button, TextField } from '@material-ui/core';
import * as actions from '../../store/actions/actions'

class UserView  extends Component {
  constructor(props) {
    super(props)
    this.state={
      calorieGoal: this.props.userDetails.calorieGoal,
      carbGoal: this.props.userDetails.carbGoal,
      proteinGoal: this.props.userDetails.proteinGoal,
      fatGoal: this.props.userDetails.fatGoal,
      submitted:false
    }
    this.submitRef = React.createRef()
    }

  onSubmitHandler=(event) =>{
    event.preventDefault()
    const data = {...this.state}
    data.userId = this.props.userDetails.userId
    this.props.onUpdateUserSettings(data)

    //Flash submit button color show user sees some submit reaction
    const normalColor = this.submitRef.current.style.background
    this.submitRef.current.style.background= "#000"
    setTimeout(()=> this.submitRef.current.style.background=normalColor,1000)

  }



  onChangeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render(){ 
    return(

      <div className={styles.UserView}> 
     

        <div className={styles.profileImageDiv }>
          <img className={styles.profileImage} src={defaultProfileImg} alt="profileImg"/>
        </div>

        <Column className={styles.profileDetailsDiv}>
          <span>UserId: {this.props.userDetails.userId}</span>
          <span>UserName: {this.props.userDetails.userName}</span>
        </Column>
        <Column>
          <h4>Daily targets</h4>
          <form onSubmit={this.onSubmitHandler}>
            
            <Row vertical="center">
              <label>Calories </label>
              <TextField type="number" name="calorieGoal" value={this.state.calorieGoal} onChange={this.onChangeHandler} />
              <span>kcal</span>
              </Row>
              <Row vertical="center">
                <label>Proteins</label>
                <TextField type="number" name="proteinGoal" value={this.state.proteinGoal} onChange={this.onChangeHandler} />
                <span>gr</span>
              </Row>
              <Row vertical="center">
                <label>Carbs</label>
                <TextField type="number" name="carbGoal" value={this.state.carbGoal}  onChange={this.onChangeHandler} />
                <span>gr</span>
              </Row>
              <Row vertical="center">
                <label>Fats</label>
                <TextField type="number" name="fatGoal"  value={this.state.fatGoal}  onChange={this.onChangeHandler} />
                <span>gr</span>
              </Row>
              <Button
              ref={this.submitRef}
              type="submit"
              fullWidth
              variant="contained"
              color="primary">
              Save
            </Button>
          </form>
        </Column>
 
      </div>
  

);
    }
  }
UserView.propTypes = {};

UserView.defaultProps = {};
const mapStateToProps = (state) => {
  return {
    userDetails : state.userDetails
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onUpdateUserSettings: (userDetails) => dispatch(actions.updateUserSettings(userDetails))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserView);
