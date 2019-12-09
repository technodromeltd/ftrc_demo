import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodayStats.module.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {defaultSettings} from '../../store/defaultSettings'
import {Row,Column} from 'simple-flexbox'
import CircularMacroBar from '../CircularMacroBar/CircularMacroBar';
import Card from '../Card/Card';
import {connect} from 'react-redux'
const TodayStats = ({totals,userDetails}) => {

    return (

<Card>
  
      <div className={styles.TodayStats}>
        <h4 className={styles.title}>Summary of today</h4>
        <Row horizontal="space-evenly">
          <Column>
            <span>Calories</span>
            <div className={styles.padding}>
            <CircularMacroBar currentVal={totals.calories} goalVal={userDetails.calorieGoal} unit="kcal"/>
            </div>
          </Column>
          <Column>
            <span>Proteins</span>
            <div className={styles.padding}>
            <CircularMacroBar currentVal={totals.proteins} goalVal={userDetails.proteinGoal} unit="g"/>
            </div>
          </Column>
          <Column>
            <span>Carbs</span>
            <div className={styles.padding}>
            <CircularMacroBar currentVal={totals.carbs} goalVal={userDetails.carbGoal} unit="g"/>
            </div>
          </Column>
          <Column>
           <span>Fats</span>
            <div className={styles.padding}>
            <CircularMacroBar currentVal={totals.fats} goalVal={userDetails.fatGoal} unit="g"/>
            </div>
          </Column>

        </Row>
        
    </div>
</Card>
    
    )

}
TodayStats.propTypes = {};

TodayStats.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    userDetails : state.userDetails
  }
} 
export default connect(mapStateToProps)(TodayStats);
